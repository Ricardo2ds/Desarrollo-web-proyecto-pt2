// En tu archivo principal (por ejemplo, App.jsx)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminInicio from './vista/AdminInicio';
import AdminRegistro from './vista/AdminRegistro';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<AdminInicio />} />
        <Route path="/registro" element={<AdminRegistro />} />
        {/* Agrega otras rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
