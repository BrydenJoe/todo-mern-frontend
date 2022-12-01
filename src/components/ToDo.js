import React from 'react';

// Install icons: npm i react-icons
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";

export function ToDo({text, updateMode, deleteToDo}) {

  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  )
};