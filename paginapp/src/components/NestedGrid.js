import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Articulo from "../pages/Articulo"

export default class NestedGrid extends Component {

    render() {

        return (
            <Grid container xs={12} spacing={3}>

                <React.Fragment>
                    {
                        this.props.articulos.map((articulo) => (

                            <Articulo articulo={articulo} />

                        )
                        )}
                </React.Fragment>
            </Grid>

        )
    }
}

