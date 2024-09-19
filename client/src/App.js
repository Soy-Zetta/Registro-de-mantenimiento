
import './App.css';
import{useState} from "react"
function App() {

  const [equipo,setEquipo]= useState ("");
  const [frecuencia,setFrecuencia]= useState ("");
  const [planeado,setPlaneado]= useState ("");
  const [ejecutado,setEjecutado]= useState ("");
  const [observaciones,setObservaciones]= useState ("");
  
  const mostrarDatos = ()=>{
    alert (equipo);
  }

  return (
    <div className="App">
    <div className="datos">
      <label>Equipo de Computo: <input
      onChange={(event)=>{
        setEquipo(event.target.value);
      }}
       type="text"/></label>
       
      <label>Frecuencia: <input
      onChange={(event)=>{
        setFrecuencia(event.target.value);
      }}
       type="text"/></label>

      <label>Planeado: <input
      onChange={(event)=>{
        setPlaneado(event.target.value);
      }}
       type="text"/></label>

      <label>Ejecutado: <input
      onChange={(event)=>{
        setEjecutado(event.target.value);
      }}
       type="text"/></label>

      <label>Observaciones: <input
      onChange={(event)=>{
        setObservaciones(event.target.value);
      }}
       type="text"/></label>

      <button onClick={mostrarDatos}>Registrar</button>
    </div>
    </div>
  );
}

export default App;
