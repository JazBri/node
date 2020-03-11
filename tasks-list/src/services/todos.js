/*
 * getTasks();               //Take the local data
 * insertTask();             //Add a new task to the database
 * deleteTask();             //Delete a task from the database
 * isDoneTask();             //Change the state isDone
 */

//Take the local data
export const getUsers = async () => {
  const response = await fetch("http://localhost:3005/users/");
  const json = await response.json();
  return json.user;
};

export const insertUser = async (name, pass) => {
  console.log("INSERT");

  const response = await fetch("http://localhost:3005/users/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      pass: pass
    })
  });
  const json = await response.json();
  return json.task;
};

export const shareUser = async id => {
  const response = await fetch(`http://localhost:3005/tasks/task/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    // body: JSON.stringify({
    //   title: title,
    //   description: description,
    //   id: id
    // })
  });
  const json = await response.json();
  return json.task;
};

export const deleteUser = async id => {
  const response = await fetch(`http://localhost:3005/users/${[id]}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    // body: JSON.stringify({
    // id : id
    // })
  });
  const json = await response.json();
  return json.task;
};

export const getTasksUsers = async () => {
  const response = await fetch("http://localhost:3005/tasksUsers/");
  const json = await response.json();
  return json.taskUser;
};

export const insertTaskUser = async (idTask, idUser) => {
  console.log("INSERT");

  const response = await fetch("http://localhost:3005/tasksUsers/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idTask: idTask,
      idUser: idUser
    })
  });
  const json = await response.json();
  return json.taskUser;
};

export const innerTasksUser = async (idTask, idUser) => {
  console.log("GET");
  const response = await fetch("http://localhost:3005/tasksUsers/inner", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idTask: idTask,
      idUser: idUser
    })
  });
  const json = await response.json();
  return json.taskUser;
};

export const deleteTaskUser = async id => {
  const response = await fetch(`http://localhost:3005/tasksUsers/${[id]}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    // body: JSON.stringify({
    // id : id
    // })
  });
  const json = await response.json();
  return json.taskUser;
};

export const getTasks = async () => {
  const response = await fetch("http://localhost:3005/tasks/");
  const json = await response.json();
  return json.task;
};

//Add a new task to the database
export const insertTask = async (title, description) => {
  console.log("INSERT");

  const response = await fetch("http://localhost:3005/tasks/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      description: description,
      isDone: 0
    })
  });
  const json = await response.json();
  return json.task;
};

export const modifyTask = async (title, description, id) => {
  const response = await fetch(`http://localhost:3005/tasks/task/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      description: description,
      id: id
    })
  });
  const json = await response.json();
  return json.task;
};

//Delete a task from the satabase
export const deleteTask = async id => {
  const response = await fetch(`http://localhost:3005/tasks/${[id]}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    // body: JSON.stringify({
    // id : id
    // })
  });
  const json = await response.json();
  return json.task;
};

//Change the state isDone
export const isDoneTask = async id => {
  const response = await fetch(`http://localhost:3005/tasks/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    // body: JSON.stringify({
    // title: title,
    // description: description,
    // isDone: 1
    // })
  });

  const json = await response.json();
  return json.task;
};

export const saveTask = async () => {
  return "tarea guardada";
};
