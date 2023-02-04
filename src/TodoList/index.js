import React from "react";
import "./TodoList.css"

function TodoList(props){ //La propiedad children devuelve una colección de los elementos secundarios de un elemento.
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};