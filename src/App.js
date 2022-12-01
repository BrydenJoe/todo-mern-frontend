import { useState, useEffect } from "react";
import { ToDo } from "./components/ToDo";
import { getAllMyToDos, createTodo, updateToDo, deleteToDo } from "./utils/HandleApi";

export default function App() {

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllMyToDos(setToDo)
  }, [])

  function updateMode(_id, text) {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Do Something</h1>

        <div className="top">
          <input
            className="input-text"
            type="text"
            placeholder="Add new item to do..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            className="add-btn"
            type="button"
            value={isUpdating ? "Update" : "Add"}
            onClick={isUpdating
              ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => createTodo(text, setText, setToDo)
            }
          />
        </div>

        {toDo.map((item) => {
          return (
            <ToDo 
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
            )
        })}
      </div>
    </div>
  );
}
