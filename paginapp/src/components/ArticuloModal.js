import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grow from '@material-ui/core/Grow'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Close from '@material-ui/icons/Close'
import imagen from '../static/images/1.png'
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'auto',
    borderRadius: 3,
    position: 'absolute',
    top: '0',
    left: '0',


  },
  paper: {
    backgroundColor: 'rgb(203, 208, 214)',
    boxShadow: theme.shadows[5],
    border: 'auto',
    borderRadius: 3,
    height: '90%',
    width: '90%',
    overflowY: 'scroll',

  },
  img: {
    height: '100%',
    width: '100%',
    float: 'left',
    [theme.breakpoints.down('xs')]: {

      padding: '1%'
    }
  },
  titulo: {
    fontFamily: 'Georgia',
    display: 'flex',
    margin: '2%'
  },
  cuerpo: {
    fontFamily: 'Arial',
    display: 'flex',
    margin: '2%',

  },
  autor: {
    padding: '2%',
    display: 'flex',
    float: 'right'
  },
  centered: {
    float: 'center'
  },
  lefted:{
    float:'left'
  },
  close: {
    
    position: 'relative',
    float: 'right',
    background: 'rgba(255, 0, 0, 0.4)',
  },
  closediv:{
    backgroundImage: `url(${imagen})`,
    repeat:'repeat',
  }

}));

export default function ArticuloModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { titulo, descripcion, image } = props

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = () => {
    handleClose()
  }
  const matches = useMediaQuery('(max-width:500px)');
  if (!matches) {
    return (
      <div>
        <Button size="small" color="primary" onClick={handleOpen}>
          Ver
          </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Grow in={open}>
            <div className={classes.paper}>

              <Grid container xs={12}>
                {/* Botones */}
                
                <Grid className={classes.closediv} item xs={12}>
                  <Button className={classes.close} onClick={onClick}>
                    <Close />
                  </Button>
                </Grid>

                {/* Autor y fecha */}
                <Grid item container xs={6} >
                  <Grid item xs={3}>
                    <div >
                      <p ><b>Autor:</b> Ejemplo </p><br />
                    </div>

                  </Grid>

                  <Grid item xs={3}>
                    <div className={classes.centered}>
                      <p ><b>Fecha:</b> 01 de enero del 01 </p><br />
                    </div>
                  </Grid>

                  {/* Imagen */}
                  <Grid item xs={12}>
                    <img className={classes.img} alt="Imagen de articulo" src={image} />
                  </Grid>

                  
                </Grid>
                {/* Cuerpo */}
                <Grid item xs={6}>
                    <h1 className={classes.titulo}>{titulo}</h1>
                    <p className={classes.cuerpo}>{descripcion}</p>
                  </Grid>
                
                <Grid item xs={12}>
                  <p className={classes.cuerpo}>
                    Pellentesque et dolor in ligula aliquam sollicitudin non nec nisi. Aenean tincidunt odio at bibendum vulputate. Aliquam cursus tellus vel ex suscipit aliquet. Maecenas vitae nisi velit. In ac enim ut risus sollicitudin pellentesque. In sit amet nibh orci. Nulla malesuada, eros a cursus vehicula, neque felis eleifend massa, non sodales enim nisi ac lectus. Aliquam dolor eros, sagittis eget ornare non, dictum sed mauris. Aenean molestie tincidunt elementum. Integer euismod sagittis ligula. Aenean ullamcorper faucibus orci, ac condimentum enim faucibus vel. Vestibulum fermentum sed ligula sit amet placerat. Aenean lectus tellus, imperdiet in odio ac, consequat varius massa. Fusce consectetur erat quis dui vehicula hendrerit a tempor nulla.
                  </p>
                </Grid>
              </Grid>
              
            </div>
          </Grow>
        </Modal>
      </div >
    );
  } else {
    return (
      <div>
        <Button size="small" color="primary" onClick={handleOpen}>
          Ver
          </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Grow in={open}>
            <div className={classes.paper}>
              <Grid container xs={12}>
              
                <Grid className={classes.closediv}item xs={12}>
                  <Button className={classes.close} onClick={onClick}>
                    <Close />
                  </Button>
                </Grid>

                {/* Autor y fecha */}
                <Grid item container xs={12} >
                  <Grid item xs={6}>
                    <div >
                      <p style={{padding:'5%'}}><b>Autor:</b> Ejemplo </p><br />
                    </div>

                  </Grid>

                  <Grid item xs={6}>
                    <div >
                      <p style={{padding:'5%'}}><b>Fecha:</b> 01 de enero del 01 </p><br />
                    </div>
                  </Grid>

                  {/* Imagen */}
                  <Grid item xs={12}>
                    <img className={classes.img} alt="Imagen de articulo" src={image} />
                  </Grid>
                </Grid>



                <Grid item xs={12}>
                  <h1 className={classes.titulo}>{titulo}</h1>
                  <p className={classes.cuerpo}>
                  Pellentesque et dolor in ligula aliquam sollicitudin non nec nisi. Aenean tincidunt odio at bibendum vulputate. Aliquam cursus tellus vel ex suscipit aliquet. Maecenas vitae nisi velit. In ac enim ut risus sollicitudin pellentesque. In sit amet nibh orci. Nulla malesuada, eros a cursus vehicula, neque felis eleifend massa, non sodales enim nisi ac lectus. Aliquam dolor eros, sagittis eget ornare non, dictum sed mauris. Aenean molestie tincidunt elementum. Integer euismod sagittis ligula. Aenean ullamcorper faucibus orci, ac condimentum enim faucibus vel. Vestibulum fermentum sed ligula sit amet placerat. Aenean lectus tellus, imperdiet in odio ac, consequat varius massa. Fusce consectetur erat quis dui vehicula hendrerit a tempor nulla.
                  </p>

                  <p className={classes.cuerpo}>
                    Pellentesque et dolor in ligula aliquam sollicitudin non nec nisi. Aenean tincidunt odio at bibendum vulputate. Aliquam cursus tellus vel ex suscipit aliquet. Maecenas vitae nisi velit. In ac enim ut risus sollicitudin pellentesque. In sit amet nibh orci. Nulla malesuada, eros a cursus vehicula, neque felis eleifend massa, non sodales enim nisi ac lectus. Aliquam dolor eros, sagittis eget ornare non, dictum sed mauris. Aenean molestie tincidunt elementum. Integer euismod sagittis ligula. Aenean ullamcorper faucibus orci, ac condimentum enim faucibus vel. Vestibulum fermentum sed ligula sit amet placerat. Aenean lectus tellus, imperdiet in odio ac, consequat varius massa. Fusce consectetur erat quis dui vehicula hendrerit a tempor nulla.
                  </p>
                </Grid>
              </Grid>


            </div>
          </Grow>
        </Modal>
      </div >
    );
  }

}