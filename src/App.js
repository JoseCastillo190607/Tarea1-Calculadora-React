import './App.css';
import Boton from './componentes/boton/Boton';
import BotonDelete from './componentes/botonDelete/BotonDelete';
import Pantalla from './componentes/pantalla/Pantalla';
import logoUTA from './images/MicrosoftTeams-image.png';

import {useState} from 'react';

function App() {

  const [input, setInput] = useState('Hola');

  const agregarInput = val =>{
    setInput(input +val)
  }


  return (
    <div className="App">
      <div className='logoContenedor'>
        <img src={logoUTA} className='logoUta'
        alt='logo de la Uta'/>
      </div>
      <div className='contenedorCalculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonDelete/>
        </div>
      </div>

    </div>
  );
}

export default App;
