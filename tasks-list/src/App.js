import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import { getTasks, insertTask, isDoneTask, deleteTask, modifyTask, deleteOneTask } from './services/todos'
import ListsContainer from './components/ListContainer';
import CustomModal from './components/common/CustomModal'
import useModalWithData from './hooks/useModalWithData'
// import {getTasks} from '../src/components/Api'

const App = () => {
  const handleClick = param => {
    getTasks().then(tasks => {
      console.log(tasks);
    });
  };

  //Tasks, form and modal states
  const initialFormState = {
    name: "",
    description: "",
    
  }
  const [tasks, setTasks] = useState([])
  const [form, setForm] = useState(initialFormState)
  const [setIsModalOpened, isModalOpened, modalData, setModalData] = useModalWithData()
  
  const handleChange = e => {
    const value = e.target.value
    const name = e.target.name

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { name, description } = form
    if (form.id) {
      const newTasks = tasks.map(task => task.id === form.id ? form : task)
      setTasks(newTasks)
      setIsModalOpened(false)
    }
    else if (name && description) {
      const task = {
        name,
        description
      }
      task.id = tasks[tasks.length - 1].id + 1
      setTasks([...tasks, task])
      setIsModalOpened(false)
    }
  }


  //Toma las tareas del localhost  y las setea
  useEffect(() => {
    getTasks().then(data => setTasks(data))
  }, [])


//Cambia el estado de las tareas del localhost
  const changeTaskStatus = async (task) => {
    await isDoneTask(task.id).then(() =>
    getTasks().then(tasks => setTasks(tasks))
    )
  }

//Inserta una nueva tarea
  const handleClickAddTask = async (task) => {
    await insertTask(task.title, task.description).then(() => 
    getTasks().then(tasks => setTasks(tasks))
  )
    setForm(initialFormState)
    setModalData(initialFormState)
    setIsModalOpened(true)
  }

//Edita una tarea
  const editTask = async(task) => {
    modifyTask(task.title, task.description, task.id).then(() => 
    getTasks().then(tasks => setTasks(tasks))
  )
    setForm(task)
    setModalData(form)
    setIsModalOpened(true)
  }

//Elimina una tarea
const deleteOneTask = async(task) =>{
  deleteOneTask(task.id).then(tasks =>{
    setTasks(tasks)
  })  
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
          deleteOneTask = {deleteOneTask}
        />

      </div>
    </div>
  );
}

export default App;