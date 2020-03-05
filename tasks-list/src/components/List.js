import React from "react";
import Task from "./Task";


const List = ({ onChangeTaskStatus, onEditTask, tasksList, title, deleteOneTask }) => (
  <>
    <h3>{title}</h3>
    {tasksList.map((task, key) =>
      (<Task
        task={task}
        onChangeState={() => onChangeTaskStatus(task)}
        onEditTask={() => onEditTask(task)}
        deleteOneTask={() => deleteOneTask(task)}
        key={key}
        
      />)
    )}
  </>
)

export default List