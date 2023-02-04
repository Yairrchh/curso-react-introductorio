import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";  

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Cortar tomates', completed: true},
//   {text: 'Cortar pimenton', completed: false},
//   {text: 'llorar', completed: false}
// ]
//para crear un custom hook Siempre debe empezar con 'use'
// nos traemos todo lo que tenga que ver con persistencia de datos


function App() { //Cuando una funcion empieza con mayuscula es porque es un componente. y su argumento "props" significa propiedades

  return ( //llamamos a AppUI y le enviamos todos los componentes a AppUI
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

// Cuando insertamos export default antes de nuestro código, estamos exportando un único objeto. Es decir, 
//se exportará todo el contenido como un solo bloque. 
//La sentencia export default lleva por detrás una expresión, que al final es algo que JavaScript puede interpretar.
