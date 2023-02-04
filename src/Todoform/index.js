import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')// creamos uun estado local 


    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)  


    const onChange = (event) => { // Resivimos nuestro evento
        setNewTodoValue(event.target.value) //entramos al elemento que se modifico y agarramos su nuevo valor con value
     }

    const onCancel = () => {
        setOpenModal(false)//con este boton cerramos nuestro modal al darle cancelar
    };

    const onSubmit = (event) => {
        event.preventDefault()// nos ayuda a cuando hacemos el envio de el form no recargue la pagina
        addTodo(newTodoValue);//aqui agregamos nuestra tarea
        setOpenModal(false);//Con esta funcion cierro mi modal al agregar uno nuevo
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Crea nueva tarea</label>
            <textarea 
            value={newTodoValue}//con value lo conectamos
            onChange={onChange}//
            type="button"
            placeholder="Salir de compras"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add">
                    Agregar
                </button>
            </div>
        </form>
    )
}

export {TodoForm};