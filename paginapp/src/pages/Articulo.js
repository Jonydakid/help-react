import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ArticuloModal from '../components/ArticuloModal'
var style = makeStyles(theme => ({
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
    img: {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        minHeight: '100%',
        minWidth: '100%'
    },
    titulo: {
        color: 'black',
        fontSize: '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px'
        }
    }
}))


export default function Articulo(props) {
    const { titulo, descripcion, image } =  props.articulo;
    const stl = style()
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
                            <Typography className={stl.titulo} >
                                {titulo}
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <ArticuloModal titulo={titulo} descripcion={descripcion} image={image} />
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
    )
}