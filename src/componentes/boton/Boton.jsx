import React from 'react'
import './boton.css'

export default function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

  return (
    <button 
    className={`botonContenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </button>
  )
}
