import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton(props){

    const onClickButton = () => {
       props.setOpenModal(prevState => !prevState) // con esta funcion cambiamos el estado de nuestra funcion para abrir y cerrare el boton modal
    }

    return(
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >
         +
        </button>
    );
}

export { CreateTodoButton };