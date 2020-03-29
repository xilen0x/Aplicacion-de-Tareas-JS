document.getElementById("formTask").addEventListener('submit', saveTask);

function saveTask(e) { // funcion q guarda las tareas

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title: title,
        description: description
    };

    if (localStorage.getItem('tasks') === null) { // si localStorage está vacio
        let tasks = []; //creo un arreglo vacio
        tasks.push(task);//y le inserto el objeto task
        localStorage.setItem('tasks', JSON.stringify(tasks)); //aki almaceno las tareas en caso q no exista ninguna con el nombre tasks

    } else {// de lo contrario si ya existen tareas:
        let tasks = JSON.parse(localStorage.getItem('tasks'));//obtengo las tareas, las transformo a un formato json y las almaceno en una variable
        tasks.push(task);//actualizo mi arreglo
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
}

function getTasks() { // funcion q obtiene y muestra las tareas en el DOM
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tareas');

    tasksView.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
            <p>${title} - ${description}</p>
            <a class="btn btn-danger" onclick="deleteTask('${title}')">
            Delete</a>
        </div>
    </div>`
    }
}

function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i,1);
        }
    }
localStorage.setItem('tasks', JSON.stringify(tasks));
getTasks();
}

getTasks();