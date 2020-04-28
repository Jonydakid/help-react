import React, { Fragment } from 'react'
import Header from '../layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Articulos from "../pages/Articulos";

import { makeStyles } from "@material-ui/core/styles";
import About from "../pages/About";
import Inicio from "../pages/Inicio"
import ConsultaVirtual from "../pages/ConsultaVirtual"
import { Alerts } from './Alerts/Alerts';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const useStyles = makeStyles(theme => ({

  root: {
    marginLeft: '0',
    marginRight: '0',
    borderRadius: 3,
    border: 'auto',
    color: 'white',
    marginTop: '7%',

  },
  label: {
    textTransform: 'capitalize',
  },
}));

export default function Contenedor() {
  const stile = useStyles();

  const alertOptions = {
    timeout: 3000,
    position: 'top center'
  }

  return (


    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Fragment>
        <Router>
          <Header />
          <Alerts />
          <div className={stile.root}  >
            <Route exact path="/" component={Inicio} />
            <Route path="/articulos" component={Articulos} />
            <Route path="/about" component={About} />
            <Route path="/consultaVirtual" component={ConsultaVirtual}/>
          </div>
        </Router>
      </Fragment>

    </AlertProvider>
  )
}
