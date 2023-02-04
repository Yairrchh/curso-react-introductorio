import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
//le pasamos los props para adelantarnos debe eviarnos 2 props para poder seguir leyendo y actualizar
function TodoSearch(){
    //antes const [searchValue, setSearchValue] = React.useState(''); // creamos un estado es la forma en podemos agregar estado a nuestros componentes
  // primero resivimos el estado y luego ira el nombre de una funcion para actualizar nuestro estado

//   El hook de contexto nos ayuda a acceder a datos globales de nuestro
//    contexto, desde cualquier componente hijo, sin tener que pasar estos datos por props componente por componente.
//   Tiene la misma funcionalidad que el consumer de nuestro contexto, 
//   pero useContext también tiene una manera más sencilla de utilizar y una sintaxis mucho más clara.

    const {searchValue, setSearchValue} = React.useContext(TodoContext)
     const onSearchValueChange = (event) => {
        console.log(event.target.value); // lo usamos para evular lo que estamos escribiendo en nuestro buscaodr
        setSearchValue(event.target.value);
    }

    return (
        <input 
        className="TodoSearch" 
        placeholder="Buscar tarea"
        value={searchValue}// el valor de nuestro input tiene que ser el mismo estado tiene que estar conectado
        onChange={onSearchValueChange}//escuchamos el evento de cada ves que cambie nuestro input
        />
    );
}
export {TodoSearch};

