import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext() // con esta Herramienta que nos permite crear contexto {provider y consumer}

function TodoProvider(props) {

      //traemos nuestra funcion para actualizar los todos y ademas llamamos a nuestro customHook useLocalStorage
  const {
    item: todos, // renombramos los elementos 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []) //nuestros todos tienen que ser arrays por defecto
  //cuando llamamos a nuestro estado la primera poscicio es el nombre del estado el 2do es el nombre de la funcion con que vamos a actualizar el estado
  const [searchValue, setSearchValue] = React.useState('');

//Creamos un nuevo estado para nuestro modal 
  const [openModal, setOpenModal] = React.useState(false);

// aqui vamos a crear una variable para ver cuantod todos tenemos completados de los todos guardados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
// vamos a crear un array vacio vemos si nuestro array vamos a ver si es mayor o igual a 1
//para asi si no lo es mostrar nuestros todos completos


  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => { //con esta funcion filter le pedimos los todos que tengan concidencia 
      const todoText = todo.text.toLowerCase(); // aqui transformamos todas las letras a minusculas para asi no tener errores en el buscador por diferencia de mayusculas o minusculas
      const searchText = searchValue.toLowerCase();// aqui tambien cambiamos todo lo que nuestros usuarios escriban a minusculas
      return todoText.includes(searchText); // con includes hacemos la comparacion lo retornamos para decirle a nuestra funcion que es el criterio de evaluacion para determinar que muestra y que no 
    })
 
  }
  //creamos una funcion para AddTodo va acrear un nuevo Todo

  const addTodo = (text) => {
    const newTodos= [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos)
  }
// esta funcion es para marcar como completados los todos
  const completeTodo = (text) => { // de argumoento a la funcion le enviamos text que es el identificador de los todos
    const todoIndex = todos.findIndex(todo => todo.text === text); // con esta linea de codigo estamos examinando todo por todo para ver cual tiene ese mismo texto y cuando lo encontremos nos va a dar la posicion
    
    const newTodos= [...todos];//Le decimos que es una exacta copia de los todos que teniamos antes
    newTodos[todoIndex].completed = true; //aqui estamos devolviendo el objeto con el completed cambiado a true 
    //Otra manera de hacerlo 
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // }
    saveTodos(newTodos)// para que resiva la nueva lista de todos
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text); 
    const newTodos= [...todos];
    newTodos.splice(todoIndex, 1); // con esta propiedad vamos a eliminar el todo, tenemos que decirle donde lo va a eliminar y cuantos todos

    saveTodos(newTodos)
  }

    return ( //Retornamos nuestro todoContext.Provider //decimos que value sera un objeto y le enviamos los valores que queremos compartir
        <TodoContext.Provider value={{ 
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,   //con props.children de esta forma cualquier componente que llame a nuestro componente todo provider lo va a poder llamar
            openModal,
            setOpenModal,
        }}> 
            {props.children}
        </TodoContext.Provider> //Con provider lo vamos a usar para envolver toda nuestra aplicacion tiene por dentro cualqueir componente de nuestra app
    )
}

export {TodoContext, TodoProvider};



