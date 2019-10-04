import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grow from '@material-ui/core/Grow'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px solid',
    position: 'absolute',
    top: '0',
    left: '0',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: '90%',
    width: '90%',
    overflowY: 'scroll',
    borderRadius: '16px solid'
  },
  img: {
    height: '50%',
    width: '50%'
  },
  titulo: {
    fontFamily: 'Georgia',
    display: 'flex'
  },
  cuerpo: {
    fontFamily: 'Arial',
    display: 'flex'
  },
  autor: {
    display: 'flex',
    float: 'right'
  },
  fecha: {
    display: 'flex',
    float: 'left'
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
              <Grid item container xs={6} spacing={1}>
                <Grid item xs={3}>
                  <p className={classes.autor}><b>Autor:</b> Ejemplo </p><br />
                </Grid>
                <Grid item xs={3}>
                  <p className={classes.fecha}><b>Fecha:</b> 01 de enero del 01</p>
                </Grid>
                <Grid item xs={5}>
                <img className={classes.img} alt="Imagen de articulo" src={image} />
              </Grid>
              </Grid>
              
            </Grid>
            <Grid item xs={6}>
              <h1 className={classes.titulo}>{titulo}</h1>
              <p className={classes.cuerpo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis aliquam augue, a pulvinar diam feugiat et. Phasellus imperdiet lacus placerat, lacinia quam sed, gravida eros. Fusce justo dui, efficitur sit amet neque in, convallis sodales tellus. Vestibulum vulputate interdum fringilla. Nulla facilisi. Morbi eget tempus risus, in volutpat nulla. Nam nec cursus metus. Cras congue consequat erat, non ultricies dui fringilla id. Nulla hendrerit elementum tincidunt. In hac habitasse platea dictumst. Sed aliquet lacus mauris, quis sollicitudin lacus feugiat a. Cras a nulla et nisl sagittis gravida quis a tortor. Aliquam eu vehicula libero. Donec ac fermentum ipsum. Nunc quam velit, pellentesque in semper a, porttitor eget nulla. Maecenas blandit magna nec auctor sollicitudin.</p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.cuerpo}>
                Pellentesque et dolor in ligula aliquam sollicitudin non nec nisi. Aenean tincidunt odio at bibendum vulputate. Aliquam cursus tellus vel ex suscipit aliquet. Maecenas vitae nisi velit. In ac enim ut risus sollicitudin pellentesque. In sit amet nibh orci. Nulla malesuada, eros a cursus vehicula, neque felis eleifend massa, non sodales enim nisi ac lectus. Aliquam dolor eros, sagittis eget ornare non, dictum sed mauris. Aenean molestie tincidunt elementum. Integer euismod sagittis ligula. Aenean ullamcorper faucibus orci, ac condimentum enim faucibus vel. Vestibulum fermentum sed ligula sit amet placerat. Aenean lectus tellus, imperdiet in odio ac, consequat varius massa. Fusce consectetur erat quis dui vehicula hendrerit a tempor nulla.
                </p>
            </Grid>
            
          </div>
        </Grow>
      </Modal>
    </div >
  );
}