import React from 'react'
import './pantalla.css'


// forma alternativa de definir los componentes funconales, normalmente esta esoructura se usa cuando los componentes tienen son muy sencillos, son una presentacion y  no tienen como tal una logica o funcion

const Pantalla = ({input}) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;


