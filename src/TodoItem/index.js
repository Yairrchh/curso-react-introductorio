import React from "react";
import "./TodoItem.css"

function TodoItem(props){
   
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-chek ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}//estamos llamando la funcion onComplete cada vez que le damos click y traemos sus props
            >✔</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete} // estamos llamando la funcion 
            >    
            X</span>
        </li>
    );
}

export { TodoItem };