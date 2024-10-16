// src/App.js
import React from 'react';
import './App.css';
import AdminInicio from './components/AdminInicio';  // Importamos el nuevo componente

function App() {
  return (
    <div className="App">
      {/* Renderizamos el componente AdminInicio */}
      <AdminInicio />
    </div>
  );
}

export default App;
