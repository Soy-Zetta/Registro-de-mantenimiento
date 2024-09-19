import './App.css';
import {useState} from "react"

function App() {

  const [nombre,setAuditorio] = useState ("");
  const [nombrecompleto,setNombreCompleto] = useState ("");
  const [fecha,setFecha] = useState ("");
  const [hora,setHora] = useState ("");
  const [nombredelaactividad,setnombreactividad] = useState ("");

  
  const mostrarDatos = ()=>{
    alert(nombre);
  }


  return (
    <div className="App">
      .<div className= "datos">

        <label>Tipo de Auditorio: <input 
        onChange={(event)=>{
          setAuditorio(event.target.value);
        }}
        type="text"/></label>

        <label>Nombre Completo: <input
        onChange= {(event)=>{
          setNombreCompleto(event.target.value);
        }}
        type="text"/></label>

        <label>Fecha de la actividad: <input 
        onChange ={(event)=>{
          setFecha(event.target.value);
        }} type="date"/></label>

        <label>Hora: <input 
        onChange = {(event)=>{
        setHora(event.target.value);
        }}
        type="time"/></label>

        <label>Nombre de la actividad: <input 
        onChange = {(event)=>{
        setnombreactividad(event.target.value);
        }}
        type="time"/></label>

        <button on onClick={mostrarDatos}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
