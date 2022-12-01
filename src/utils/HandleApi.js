// Install axios: npm i axios
import axios from 'axios';

const baseUrl = "http://localhost:5000";

function getAllMyToDos(setToDo) {
    axios
        .get(baseUrl)
        .then(({data}) => {
            console.log('data...', data);
            setToDo(data)
        })
}

function createTodo(text, setText, setToDo) {
    axios
        .post(`${baseUrl}/create-todo`, {text})
        .then((data) => {
            console.log(data);
            setText("");
            getAllMyToDos(setToDo);
        })
}

function updateToDo(toDoId, text, setToDo, setText, setIsUpdating) {
    axios
        .post(`${baseUrl}/update-todo`, { _id: toDoId, text })
        .then((data) => {
            console.log(data);
            setText("");
            setIsUpdating(false);
            getAllMyToDos(setToDo);
        })
        .catch((err) => console.log(err))
}

function deleteToDo(toDoId, setToDo) {
    axios
        .post(`${baseUrl}/delete-todo`, { _id: toDoId})
        .then((data) => {
            console.log(data);
            getAllMyToDos(setToDo);
        })
        .catch((err) => console.log(err))
}

// Above functions are exported so they can be imported via App.js
export { getAllMyToDos, createTodo, updateToDo, deleteToDo }