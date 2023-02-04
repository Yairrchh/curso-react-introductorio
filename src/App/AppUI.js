import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal";
import { TodoForm } from "../Todoform";
//Creamos un nuevo componente AppUI.js aqui vamos a tener todo lo que vamos a maquetar vamos a retornar todos los elementos
function AppUI() {

    const {
        error,// aqui vamos a resivir las propiedades que queramos de nuestro value creado en todo provider
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext) //Usamos un nuevo hook le enviamos nuestro contexto que estamos importando

    
    return(
         //Estamos enviando una etiqueta invisible React.Fragment porque asi no los pide react 
   <React.Fragment> 
   <TodoCounter
   //total={totalTodos} //le enviamos la propiedad a todoCounter va a darle cada vez que damos render la informacion
   //completed={completedTodos}// le estamos enviando el calculo a todoCounter
   />
   <TodoSearch
    //searchValue={searchValue} //enviamos las propiedades de nuestro estado
    //setSearchValue={setSearchValue}
   />
   
    
        <TodoList> 
        {loading && <p>Estamos cargando, no desesperes</p>} 
        {error && <p>Hubo un Error...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu Primer todo</p>}   
   
        {searchedTodos.map(todo => ( //le pasamos searchedTodos que viene de nuestro condicional if para mostrar los todos 
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)} //Aqui en todo item vamos a resivir esa propiedad, lo que va entre parentesis es el indetificar unico 
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}

   <CreateTodoButton
    setOpenModal={setOpenModal}
   />
  </React.Fragment>
    );
}

export {AppUI}