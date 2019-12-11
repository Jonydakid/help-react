
import React, { Component } from 'react'
import axios from 'axios'
import NestedGrid from "../components/NestedGrid"




export default class Articulos extends Component {

    state = {
        articulos: []
    }
    componentWillMount() {
        axios.get('https://api.myjson.com/bins/qy644')
            .then(res => this.setState({ articulos: res.data }))
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
