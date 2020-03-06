/*
* getTasks();               //Take the local data 
* insertTask();             //Add a new task to the database
* deleteTask();             //Delete a task from the database
* isDoneTask();             //Change the state isDone 
*/

//Take the local data
export const getTasks = async () => {
    const response = await fetch('http://localhost:3005/tasks/', );
    const json = await response.json();
    return json.task;
}


//Add a new task to the database
export const insertTask = async (title, description) => {
    console.log("INSERT");

    const response = await fetch('http://localhost:3005/tasks/', {
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
}

export const modifyTask = async (title, description, id) => {
    const response = await fetch(`http://localhost:3005/tasks/task/${id}`, {
        method: "PUT",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        title: title,
        description: description
        })
    });
    const json = await response.json();
    return json.task;
}

//Delete a task from the satabase
export const deleteTask = async (id) => {
    const response = await fetch(`http://localhost:3005/tasks/${id}`,{
    method: "DELETE",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    },
    // body: JSON.stringify({
    // id : id
    // })
});
const json = await response.json();
return json.task;
}


//Change the state isDone 
export const isDoneTask = async (id) => {
    const response = await fetch(`http://localhost:3005/tasks/${id}`, {
        method: "PUT",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
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
    return "tarea guardada"
}