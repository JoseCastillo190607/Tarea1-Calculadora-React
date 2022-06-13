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
        <div className='inputBoton'>

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
              Add 
            </button>
        </div>
       <div className='contenedorGeneral'>
      <div className='izquierda'>

      <div className="">
        
          <div className='inputBoton'>
         









          
        <div className='contenedorTabla'> 
           
            <div className='tituloLista'>Nombre</div>
            <div className='lista'>
              {people.map((person, idx) => (
                  <li className='listaNombre' id={idx}>{`${person.name} ${person.lastName}`}</li>
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* <div className='contenedorCalculadora'>
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
      </div> */}
    </div>
      <div className='wrapper'>
        
      

    <div className='derecha'> 

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

      <div className="">
        
          <div className='inputBoton'>
         
            {/* <input
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
            Add 
          </button> */}
          
        {/* <div className='contenedorTabla'> 
           
            <div className='tituloLista'>Nombre</div>
            <div className='lista'>
              {people.map((person, idx) => (
                  <li className='listaNombre' id={idx}>{`${person.name} ${person.lastName}`}</li>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
