import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NuevaPreguntaComponent from './Components/NuevaPreguntaComponent';
import HomeComponent from './Components/HomeComponent';
import ResultadosComponent from './Components/ResultadosComponent';
import PruebaFacilComponent from './Components/PruebaFacilComponent';
import PruebaIntermedioComponent from "./Components/PruebaIntermedioComponent";
import PruebaDificilComponent from "./Components/PruebaDificilComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/prueba-facil" element={<PruebaFacilComponent />} />
          <Route path="/prueba-intermedio" element={<PruebaIntermedioComponent />} />
          <Route path="/prueba-dificil" element={<PruebaDificilComponent />} />
          <Route path="/resultados" element={<ResultadosComponent/>} />
          <Route path="/nueva-pregunta" element={<NuevaPreguntaComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
