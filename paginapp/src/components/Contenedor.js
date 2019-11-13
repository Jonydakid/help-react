import React from 'react'
import Header from '../layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Articulos from "../pages/Articulos";

import {makeStyles} from "@material-ui/core/styles";
import About from "../pages/About";
import Inicio from "../pages/Inicio"


const useStyles = makeStyles(theme=>({

  root: {
    marginLeft:'0',
    marginRight:'0',
    borderRadius: 3,
    border: 'auto',
    color: 'white',
    marginTop:'7%',
    [theme.breakpoints.down('sm')]:{
      marginTop:'30%'
    }
    
  },
  label: {
    textTransform: 'capitalize',
  },
}));

export default function Contenedor() {
  const stile = useStyles();
  
  return (
    
    
    
    <Router>
      <Header />
      
      <div  className={stile.root}  >
        <Route exact path="/" component={Inicio}/>
        <Route path="/articulos" component={Articulos} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}
