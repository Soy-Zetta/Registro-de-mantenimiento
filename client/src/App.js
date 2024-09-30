import './App.css';
import { useState } from "react";
import axios from "axios";

function App() {
  const [equipo, setEquipo] = useState("");
  const [frecuencia, setFrecuencia] = useState("");
  const [estado, setEstado] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [mantenimientoList, setMantenimiento] = useState([]);

  // Función para registrar un nuevo mantenimiento
  const add = () => {
    axios.post("http://localhost:3001/create", {
      equipo: equipo,
      frecuencia: frecuencia,
      estado: estado,
      observaciones: observaciones
    })
    .then(() => {
      getMantenimientos();
      alert("Equipo registrado");
    })
    .catch((error) => {
      console.error("Error al registrar:", error);
      alert("Error al registrar el equipo.");
    });
  };

  // Función para obtener la lista de mantenimientos
  const getMantenimientos = () => {
    axios.get("http://localhost:3001/mantenimiento") // Cambiado el endpoint
    .then((response) => {
      setMantenimiento(response.data); // Almacena los datos recibidos
    })
    .catch((error) => {
      console.error("Error al obtener los mantenimientos:", error);
    });
  };

  return (
    <div className="App">
      <div className="datos">
        <label>Equipo de Computo: 
          <input
            onChange={(event) => {
              setEquipo(event.target.value);
            }}
            type="text"
          />
        </label>

        <label>Frecuencia: 
          <input
            onChange={(event) => {
              setFrecuencia(event.target.value);
            }}
            type="text"
          />
        </label>

        <label>Estado: 
          <input
            onChange={(event) => {
              setEstado(event.target.value);
            }}
            type="text"
          />
        </label>

        <label>Observaciones: 
          <input
            onChange={(event) => {
              setObservaciones(event.target.value);
            }}
            type="text"
          />
        </label>

        <button onClick={add}>Registrar</button>
      </div>

      <div className='lista'>

        {
          mantenimientoList.map((val, key) => {
            return (
              <div key={key}>
                <p>Equipo: {val.equipo}</p>
                <p>Frecuencia: {val.frecuencia}</p>
                <p>Estado: {val.estado}</p>
                <p>Observaciones: {val.observaciones}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;

