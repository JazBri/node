import React from "react";

const Task = ({
  task,
  onChangeState,
  onEditTask,
  onDeleteOneTask,
  addMyTask,
  deleteMyTask
}) => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-header">{task.title}</div>
        <div className="card-body">
          <p className="card-text">{task.description}</p>
          <div className="row d-flex p-2 bd-highlight">
            <div className="col-12 col-sm-6">
              {/* <p>{task.id}</p> */}

              <button
                className="btn btn-outline-success float-left"
                onClick={() => onChangeState()}
              >
                {task.isDone ? "Reiniciar" : "Finalizar"}
              </button>
            </div>

            <button
              className="btn btn-outline-dark float-left"
              onClick={() => deleteMyTask()}
            >
              Desvincular
            </button>

            <div className="col-12 col-sm-6">
              <br></br>
              <button
                className="btn btn-outline-danger float-left"
                onClick={() => onDeleteOneTask()}
              >
                Eliminar
              </button>
            </div>
            <div className="col-12 col-sm-6">
              <br></br>
              <button
                className="btn btn-outline-warning float-left"
                onClick={() => addMyTask()}
              >
                Agregar
              </button>
            </div>
            <div className="col-12 col-sm-6">
              <br></br>
              <div className="col-12 col-sm-6">
                <button
                  className="btn btn-outline-primary  "
                  onClick={() => onEditTask()}
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
