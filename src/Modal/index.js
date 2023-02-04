import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal({ children }) { //Le enviamos algun contenido
    return ReactDOM.createPortal( 
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')// este es el nodo de html donde vamos a mandar a nuestro hijo del componente modal
    );
}

export { Modal };

// Los portales nos permiten teletransportar componentes a otro nodo de HTML,
//  y seguir comunicándose con otros componentes como si estuviera en el mismo nodo.
// Se emplean en ocasiones donde los estilos CSS restringen los elementos. 
// Por ejemplo, problemas de apilamiento z-index y desbordamiento overflow.

// ¿Para qué podemos usarlos?

// Modales
// Tooltips
// Menús flotantes
// Widgets