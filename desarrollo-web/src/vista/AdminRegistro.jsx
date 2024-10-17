import React, { useState } from 'react';
import './styleAdminRegistro.css'; // Asegúrate de tener este CSS para estilos
import logo from '../imagenes/logo.png'; // Ruta del logo
import fondo from '../imagenes/fondo.png'; // Ruta de la imagen de fondo

const AdminRegistro = () => {
  const [usuario, setUsuario] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [rut, setRut] = useState('');
  const [numero, setNumero] = useState('');
  const [direccion, setDireccion] = useState('');
  const [huella, setHuella] = useState('');
  const [librosReservados, setLibrosReservados] = useState(0);
  const [pagado, setPagado] = useState('Sí');
  const [multa, setMulta] = useState(0);

  const handleRegistro = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de registro, como enviar los datos a una API o base de datos
    console.log({
      usuario,
      nombreCompleto,
      rut,
      numero,
      direccion,
      huella,
      librosReservados,
      pagado,
      multa,
    });
  };

  return (
    <div className="admin-registro">
      <nav className="menu">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#registro" className="active">Registro</a></li>
          <li><a href="#usuarios">Usuarios</a></li>
        </ul>
      </nav>

      <div className="form-container">
        <h2>Registrar Nuevo Usuario</h2>
        <form onSubmit={handleRegistro}>
          <div className="form-group">
            <label>Usuario:</label>
            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Nombre Completo:</label>
            <input type="text" value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>RUT:</label>
            <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Número:</label>
            <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Dirección:</label>
            <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Huella:</label>
            <input type="text" value={huella} onChange={(e) => setHuella(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Libros Reservados:</label>
            <input type="number" value={librosReservados} onChange={(e) => setLibrosReservados(e.target.value)} min="0" required />
          </div>
          <div className="form-group">
            <label>Pagado:</label>
            <select value={pagado} onChange={(e) => setPagado(e.target.value)}>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label>Multa:</label>
            <input type="number" value={multa} onChange={(e) => setMulta(e.target.value)} min="0" required />
          </div>
          <button type="submit">Registrar Usuario</button>
        </form>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default AdminRegistro;
