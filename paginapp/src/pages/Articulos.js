
import React, { Component } from 'react'
import axios from 'axios'
import NestedGrid from "../components/NestedGrid"




export default class Articulos extends Component {

    state = {
        articulos: []
    }
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/wicd4')
            .then(res => this.setState({ articulos: res.data }))

            document.getElementById("loader").style.display = "none";
    }
    /*
      return this.state.articulos.map((articulo)=>(
            <React.Fragment>
                <Articulo key={articulo.id} articulo={articulo} ver={this.props.ver} estilo={this.useStyles}/>
            </React.Fragment>
        ))
    */
    render() {
        return (
            <React.Fragment>
                <NestedGrid articulos={this.state.articulos} />
            </React.Fragment>
        )

    }
}
