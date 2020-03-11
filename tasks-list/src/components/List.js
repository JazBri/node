import React from "react";
import Task from "./Task";

const List = ({
  onChangeTaskStatus,
  onEditTask,
  tasksList,
  title,
  onDeleteOneTask,
  addMyTask,
  deleteMyTask
}) => (
  <>
    <h3>{title}</h3>
    {tasksList.map((task, key) => (
      <Task
        task={task}
        onChangeState={() => onChangeTaskStatus(task)}
        onEditTask={() => onEditTask(task)}
        onDeleteOneTask={() => onDeleteOneTask(task)}
        addMyTask={() => addMyTask(task)}
        deleteMyTask={() => deleteMyTask(task)}
        key={key}
      />
    ))}
  </>
);

export default List;
