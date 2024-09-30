import "./App.css";
import { useState, useEffect } from "react"; // Importamos useEffect
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [equipo, setEquipo] = useState("");
  const [frecuencia, setFrecuencia] = useState("");
  const [estado, setEstado] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [mantenimientoList, setMantenimiento] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Función para registrar un nuevo mantenimiento
  const add = () => {
    axios
      .post("http://localhost:3001/create", {
        equipo: equipo,
        frecuencia: frecuencia,
        estado: estado,
        observaciones: observaciones,
      })
      .then(() => {
        getMantenimientos(); // Obtenemos la lista actualizada
        setMensaje("Equipo registrado con éxito");
      })
      .catch((error) => {
        console.error("Error al registrar:", error);
        setMensaje("Error al registrar el equipo.");
      });
  };

  // Función para obtener la lista de mantenimientos
  const getMantenimientos = () => {
    axios
      .get("http://localhost:3001/mantenimiento")
      .then((response) => {
        setMantenimiento(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los mantenimientos:", error);
      });
  };

  // Llamamos a getMantenimientos cuando el componente se monta
  useEffect(() => {
    getMantenimientos(); // Se ejecuta al cargar la página
  }, []); // El array vacío asegura que solo se ejecute una vez

  return (
    <div className="container">
      {/* Barra de navegación */}
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Sistema de Mantenimiento</span>
      </nav>

      {/* Mensaje de alerta */}
      {mensaje && (
        <div
          className={`alert ${
            mensaje.includes("Error") ? "alert-danger" : "alert-success"
          }`}
          role="alert"
        >
          {mensaje}
        </div>
      )}

      <div className="card text-center mt-4">
        <div className="card-header">GESTION DE COMPUTADORES</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Equipo de Computo:
            </span>
            <input
              type="text"
              onChange={(event) => {
                setEquipo(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese el nombre del computador"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Frecuencia:
            </span>
            <input
              type="text"
              onChange={(event) => setFrecuencia(event.target.value)}
              className="form-control"
              placeholder="Ingrese la frecuencia"
              aria-label="Frecuencia"
              aria-describedby="basic-addon2"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Estado:
            </span>
            <input
              type="text"
              onChange={(event) => setEstado(event.target.value)}
              className="form-control"
              placeholder="Ingrese el estado"
              aria-label="Estado"
              aria-describedby="basic-addon3"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon4">
              Observaciones:
            </span>
            <input
              type="text"
              onChange={(event) => setObservaciones(event.target.value)}
              className="form-control"
              placeholder="Ingrese las observaciones"
              aria-label="Observaciones"
              aria-describedby="basic-addon4"
            />
          </div>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-success" onClick={add}>
            Registrar
          </button>
        </div>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Equipo de computo</th>
            <th scope="col">Frecuencia</th>
            <th scope="col">Estado</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>
        <tbody>

{
              mantenimientoList.map((val,key)=>{
                return <tr>
                <th scope="row">{val.id}</th>
                <td>{val.equipo}</td>
                <td>{val.frecuencia}</td>
                <td>{val.estado}</td>
                <td>{val.observaciones}</td>
              </tr>
              })
              }

        </tbody>
      </table>
    </div>
  );
}

export default App;
