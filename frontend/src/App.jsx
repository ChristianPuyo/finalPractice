import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import contactos from './contactos/contactos';
import contactos2 from './contactos/secucontactos/concactos2';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rutas para los formularios de Contactos */}
          <Route path="/" element={<contactos />} />
          <Route path="/contactos2" element={<dontactos2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
