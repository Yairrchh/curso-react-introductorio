import React from "react";

function useLocalStorage(itemName, initialValue) { // resivimos el nombre del elmento con el que vamos a trabajar
    //resivimos otro argumento initial value
    // necesitamos que nuestros todos puedan cambiar y vengan de localStorage por eso creamos un estado
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);//creamos un estado de error comienza con false 
    const [item, setItem] = React.useState(initialValue); // le entregamos initialValue 
  
    React.useEffect(()=> {
      setTimeout(() => { // esta funcion nos permite que se ejecute hasta dentro de un tiempo determinado
        try {
                    //creamos la variable y llamamos a nuestro elemento guardado en localStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem; //esta variable va a contener lo que vamos a enviarle a nuestro useState.
      // lo que vamos a verificar es si no hay nada en localStorage
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue)); // aqui decimos que por defecto hay un array vacio
          parsedItem = initialValue;                                       // aqui tenemos que enviarle a JSON.stringify([]) para que sea un string vacio
        } else {
          parsedItem = JSON.parse(localStorageItem) // si ya hay algo en localStorage la transformamos a un objeto de javascrip comun y corriente
        }
  
        setItem(parsedItem); // llamamos a setItem y le decimos que actualice el valor de nuestro estado con la informacion de nuestro localStorage
        setLoading(false);// llamamos nuestro setLoadig para catualizar su estado cuando ya haya cargado todo se eliminara
        } catch(error) { // usamos un try catch para detectsr un error y enviarlo
          setError(error)
        }
      }, 1000)
    })
     
  
      const saveItem = (newItem) => { // envolvemos nuestro save item tambien en try catch para ver si detectamos un error
      try {
        const stringfiedItem = JSON.stringify(newItem);// vamos a convertir todos nuestros todos en un string
        localStorage.setItem(itemName, stringfiedItem)//lo guardamos en localStorage
        setItem(newItem);//llamamos y modificamos el estado con setTodos enviando como argumento a nuestro nuevo todo
      } catch (error) {
          setError(error)
      }
      }  //Vamos a crear una funcion que vamos a utilizar de puente para comunicar nuestro localStorage con nuestras funciones para eliminar y marcar completado nuestros todos
      
      return {
        item,
        saveItem,
        loading,
        error
      }
  }

  export {useLocalStorage}