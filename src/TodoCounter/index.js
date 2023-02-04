import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() { // le decimos que llamamos a nuestros parametros o propiedades total y completed dejamos de resivirla por medio de props y vamos a llamarla con useContext
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Tareas</h2>
    );
}

export {TodoCounter};