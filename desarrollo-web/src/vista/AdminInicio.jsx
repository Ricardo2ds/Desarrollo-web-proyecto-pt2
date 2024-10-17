import React from 'react';
import './styleAdminInicio.css';
import logo from '../imagenes/logo.png'; // Ruta del logo
import fondo from '../imagenes/fondo.png'; // Ruta de la imagen de fondo

const AdminInicio = () => {
  const data = [
    {
      usuario: 'user1',
      nombreCompleto: 'Juan Pérez',
      rut: '12.345.678-9',
      numero: '987654321',
      direccion: 'Av. Siempre Viva 742',
      huella: 'Huella1',
      librosReservados: 3,
      pagado: 'Sí',
      multa: 0,
    },
    {
      usuario: 'user2',
      nombreCompleto: 'María López',
      rut: '21.876.543-2',
      numero: '963852741',
      direccion: 'Calle Falsa 123',
      huella: 'Huella2',
      librosReservados: 1,
      pagado: 'No',
      multa: 5000,
    },
    {
      usuario: 'user3',
      nombreCompleto: 'Pedro González',
      rut: '33.444.555-6',
      numero: '159753468',
      direccion: 'Pueblo Libre 456',
      huella: 'Huella3',
      librosReservados: 2,
      pagado: 'Sí',
      multa: 0,
    },
    {
      usuario: 'user4',
      nombreCompleto: 'Lucía Fernández',
      rut: '45.555.666-7',
      numero: '753951852',
      direccion: 'La Calle 89',
      huella: 'Huella4',
      librosReservados: 0,
      pagado: 'No',
      multa: 3000,
    },
    {
      usuario: 'user5',
      nombreCompleto: 'Carlos Ruiz',
      rut: '55.666.777-8',
      numero: '852963741',
      direccion: 'Calle Larga 123',
      huella: 'Huella5',
      librosReservados: 5,
      pagado: 'Sí',
      multa: 0,
    },
    {
      usuario: 'user6',
      nombreCompleto: 'Ana Torres',
      rut: '67.777.888-0',
      numero: '147258369',
      direccion: 'Calle de la Amistad 678',
      huella: 'Huella6',
      librosReservados: 4,
      pagado: 'Sí',
      multa: 0,
    },
    {
      usuario: 'user7',
      nombreCompleto: 'Luis Martínez',
      rut: '78.888.999-1',
      numero: '258963147',
      direccion: 'Calle del Sol 123',
      huella: 'Huella7',
      librosReservados: 6,
      pagado: 'No',
      multa: 8000,
    },
  ];

  return (
    <div className="admin-inicio">
      <nav className="menu">
        <img src={logo} alt="Logo" className="logo" /> {/* Logo dentro del menú */}
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#registro">Registro</a></li>
          <li><a href="#usuarios">Usuarios</a></li>
        </ul>
      </nav>

      {/* Tabla de usuarios */}
      <div className="tabla-container">
        <table className="tabla-usuarios">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Nombre Completo</th>
              <th>RUT</th>
              <th>Número</th>
              <th>Dirección</th>
              <th>Huella</th>
              <th>Libros Reservados</th>
              <th>Pagado</th>
              <th>Multa</th>
            </tr>
          </thead>
          <tbody>
            {data.map((persona, index) => (
              <tr key={index}>
                <td>{persona.usuario}</td>
                <td>{persona.nombreCompleto}</td>
                <td>{persona.rut}</td>
                <td>{persona.numero}</td>
                <td>{persona.direccion}</td>
                <td>{persona.huella}</td>
                <td>{persona.librosReservados}</td>
                <td>{persona.pagado}</td>
                <td>${persona.multa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default AdminInicio;
