import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import ArticuloModal from '../components/ArticuloModal'
var style = makeStyles({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: '8px',
        textAlign: 'center',
    },
    media: {
        height: '160px',
    },
    button: {
        label: {
            color: '#3f51b5'
        }

    },
    img:{
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        minHeight: '100%',
        minWidth: '100%'
    }
})


export default class Articulo extends Component {
    state = {
        style: style,

    }



    render() {
        const { titulo, descripcion, image } = this.props.articulo;
        const stl = style

        return (
            <React.Fragment>
                <Grid item xs={6} md={3} spacing={3} >
                    <Card className={stl.card}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                className={stl.media}
                                image={image}
                                title={titulo}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {titulo}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {descripcion}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Compartir
                        </Button>
                            <ArticuloModal titulo={titulo} descripcion={descripcion} image={image}/>
                        </CardActions>
                    </Card>
                </Grid>
            </React.Fragment>
        )
    }

}

//Proptypes
Articulo.propTypes = {
    articulo: PropTypes.object.isRequired,
    estilo: PropTypes.func.isRequired
}

