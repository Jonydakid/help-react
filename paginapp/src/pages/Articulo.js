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
        height: '100%',
        width: '100%',
        padding: '8px',
        textAlign: 'center',
    },
    media: {
        height: '160px',
    },
    button: {
        textAlign: 'center',
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
    },
    autor: {
        paddingLeft: '2%'
    }
}))


function formatTxt(text) {
  
    return (
    <div>
        {text.split("/").map((i,key) => {
            return <div key={key}>{i}<br /></div>;
        })}
    </div>);
  }
  


export default function Articulo(props) {
    const { titulo, descripcion, image, cuerpo, autor } = props.articulo;
    const stl = style()
    return (

        <React.Fragment>
            <Grid item xs={6} md={3} spacing={3} >
                <Card className={stl.card}>
                    <CardActionArea style={{ height: '90%', height: 'auto'}}>
                        <CardMedia
                            component='img'
                            className={stl.media}
                            image={image}
                            title={titulo}
                        />
                        <CardContent>
                            <Typography className={stl.titulo} >
                            {formatTxt(titulo)}
                            </Typography>
                            <div style={{ justifyContent: 'center', fontWeight: 'bold', display: 'flex', paddingTop: '10%' }}>
                                Autor:
                            <Typography className={stl.autor} >
                                    {autor}
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>

                    
                    <CardActions style={{ justifyContent: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        <ArticuloModal titulo={titulo} descripcion={descripcion} image={image} cuerpo={cuerpo} autor={autor} />
                        </div>
                    </CardActions>
                    
                </Card>
            </Grid>
        </React.Fragment>
    )
}