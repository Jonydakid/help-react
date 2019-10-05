import React from 'react';
import './App.css';
import Contenedor from "./components/Contenedor";



function App() {
  //Acá solo dejo el container por un tema de orden, dentro del contenedor se va formando toda la pagina.
  return (
      <div className='App' >
        <Contenedor id='contenedor'/> 
      </div>
  );
}
export default App;
