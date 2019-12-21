import React from 'react';
import './App.css';
import Contenedor from "./components/Contenedor";
import { Provider } from 'react-redux'
import store from './components/store'


function App() {
  //Acá solo dejo el container por un tema de orden, dentro del contenedor se va formando toda la pagina.
  return (
    <Provider store={store}>

      <div className='App' >
        <Contenedor id='contenedor' />
      </div>
    </Provider>
  );
}
export default App;
