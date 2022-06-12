import './App.css';
import Boton from './componentes/boton/Boton';
import BotonDelete from './componentes/botonDelete/BotonDelete';
import Pantalla from './componentes/pantalla/Pantalla';
import logoUTA from './images/MicrosoftTeams-image.png';
import {evaluate} from 'mathjs'


import {useState} from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val)
  };

  const resultado = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Ingrese sus valores');
    }
  };

  const [people, setPeople] = useState([
    {
      name: "John",
      lastName: "Doe",
      age: 30,
      favouriteFood: "Pizza",
      favouriteColour: "Red",
      counter: 0,
    },
  ]);

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");


  return (
    <div className="App">
      <div className='logoContenedor'>
        <img src={logoUTA} className='logoUta'
        alt='logo de la Uta'/>
      </div>
      <div className='contenedorCalculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>     
        <div className='fila'>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={resultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonDelete Del ={() => setInput('')}>
          Delete
          </BotonDelete>
        </div>
      </div>
  
    <div className="tableContainer">
      <div>
        <input
          type="text"
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          name="lastName"
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
        <button className='agregarNombre'
          onClick={() => {
            setPeople((current) => [{ name, lastName }, ...current]);
          }}
        >
          Add user
        </button>
        <th>
          <ul>
            {people.map((person, idx) => (
              <li id={idx}>{`${person.name} ${person.lastName}`}</li>
            ))}
          </ul>
         </th>
        </div>
      </div>
    </div>
  );
}

export default App;
