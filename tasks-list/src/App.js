import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import { getTasks, insertTask, isDoneTask, modifyTask, deleteTask } from './services/todos'
import ListsContainer from './components/ListContainer';
import CustomModal from './components/common/CustomModal'
import useModalWithData from './hooks/useModalWithData'

const App = () => {
  const handleClick = param => {
    getTasks().then(tasks => {
      console.log(tasks);
    });
  };

  //Tasks, form and modal states
  const initialFormState = {
    title: " ",
    description: " ",
  }

  const [tasks, setTasks] = useState([])
  const [form, setForm] = useState(initialFormState)
  const [setIsModalOpened, isModalOpened, modalData, setModalData] = useModalWithData()
  
  const handleChange = e => {
    const value = e.target.value
    const title = e.target.title
    setForm({ ...form, [title]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { title, description } = form
    /* if (form.id) {
      const newTasks = tasks.map(task => task.id === form.id ? form : task)
      setTasks(newTasks)
      modifyTask(form.title, form.description, form.id)
      setIsModalOpened(false)
      // getTasks()
    }
    else if (title && description) { */
      const task = {
        title,
        description
      }
      // getTasks()
      insertTask(title, description).then( () => getTasks().then(data => setTasks(data)) )
      // setTasks([...tasks, task])
      setIsModalOpened(false)
      setForm(initialFormState)
    // }
  }

  //Toma las tareas del localhost  y las setea
  useEffect(() => {
    getTasks().then(data => setTasks(data))
  }, [])


//Cambia el estado de las tareas del localhost
  const changeTaskStatus = async (task) => {
    console.log(tasks)
    await isDoneTask(task.id).then(() =>
    getTasks().then(tasks => setTasks(tasks))
    )
  }

//Inserta una nueva tarea
  const handleClickAddTask = async (task) => {
    setForm(initialFormState)
    setModalData(initialFormState)
    setIsModalOpened(true)
  }

//Edita una tarea
  const editTask = async(task) => {
    setForm(task)
    setModalData(form)
    setIsModalOpened(true)
  }

//Elimina una tarea
  const onDeleteOneTask = async(task) =>{
    console.log('id', task.id)

    await deleteTask(task.id).then(() => 
    getTasks().then(tasks => setTasks(tasks)))
}

  return (
    <div className="container">

      <CustomModal
        isActive={isModalOpened}
        title={form.id ?? form.id > 0 ? "Editar tarea" : "Nuevo tarea"}
        handleClose={() => setIsModalOpened(false)}
      >
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          form={form}
        />
      </CustomModal>

      <div className="row mt-3">
        <div className="col">
          <h2>Tareas</h2>
        </div>
        <div className="col">
          <button className="btn btn-primary float-right" onClick={handleClickAddTask}>Nueva</button>
        </div>
        <div className="col">
          <button className="btn btn-primary float-right" onClick={handleClick}>ALL</button>
        </div>
      </div>

      <div className="row mt-3">

        <ListsContainer
          tasks={tasks}
          editTask={editTask}
          changeTaskStatus={changeTaskStatus}
          onDeleteOneTask = {onDeleteOneTask}
        />

      </div>
    </div>
  );
}

export default App;