import React from 'react'
import Header from '../layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Articulos from "../pages/Articulos";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import About from "../pages/About";


const useStyles = makeStyles(theme=>({

  root: {
    background: 'linear-gradient(45deg, #063aa1 40%, #00ab4d 80%)',
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
      
      <Container fixed className={stile.root}  >
        <Route exact path="/"/>
        <Route path="/articulos" component={Articulos} />
        <Route path="/about" component={About} />
      </Container>
    </Router>
  )
}
