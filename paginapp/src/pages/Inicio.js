import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { faAmbulance, faPhone, faBriefcaseMedical, faUserMd, faHeartbeat, faPaperPlane, faEnvelope, faUser, faFolderOpen, faFileSignature } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import '../static/css/estiloInicio.css';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Ambulancia from "../static/images/ambulancia-rescatemedico.jpg";
import Carrusel from '../components/Carrusel/Carrusel';



const useStyles = makeStyles(theme => ({
    textField: {
        color: 'black',
        fontSize: '17px', textAlign: 'justify', float: 'left', width: '80%', left: 'auto', right: 'auto',
        marginLeft: 'auto',

        [theme.breakpoints.down('xs')]: {
            float: 'inherit',
            marginRight: 'auto', marginLeft: 'auto'
        },




    },
    subtitulo: {
        paddingTop: '7%',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            marginLeft: 'auto', marginRight: 'auto'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        }
    },
    titulo: {
        color: 'black', fontSize: "2.92rem", lineHeight: '110%', margin: '1.9466666667rem 0 1.168rem 0'
        , [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        }
    },
    forma1: {
        fill: '#f7f5f5',
        margiBottom: '10%', width: '100%'
    },
    boton: {
        backgroundColor: '#2bbbad', color: 'white',

        fontSize: '17px', textAlign: 'justify', float: 'left', width: '80%', left: 'auto', right: 'auto',
        marginLeft: 'auto',
    },

    formaFooter: {
        marginLeft: '0% !important;',
        marginTop: '-15px',
        left: '0',
        width: '100%',
        position: "absolute",
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.up('lg')]: {

        },
        [theme.breakpoints.down('xs')]: {


        },
    },
    formaFooterDown: {
        marginLeft: '0% !important;',
        position: "absolute",

        left: '0',
        width: '100%',
        [theme.breakpoints.down('sm')]: {

        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.down('xs')]: {

        },
        [theme.breakpoints.up('lg')]: {


        }
    },
    fondoGrad2: {
        backgroundImage: "-webkit-linear-gradient(left , rgb(96, 172, 64) , rgb(255, 170, 133) 100%);background-image:-moz-linear-gradient(left , rgb(96, 172, 64) , rgb(255, 170, 133) 100%);background-image:-o-linear-gradient(left , rgb(96, 172, 64) , rgb(255, 170, 133) 100%);background-image:linear-gradient(left , rgb(96, 172, 64) , rgb(255, 170, 133) 100%);background-image:-ms-linear-gradient(left , rgb(96, 172, 64) , rgb(255, 170, 133) 100%);",
        width: '100%',
        height: '650px',

        left: '0',
        float: 'left',
        position: "absolute",
        zIndex: '0',

        [theme.breakpoints.up('xs')]: {

        },

        [theme.breakpoints.down('xs')]: {

        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.down('sm')]: {

            height: '890px',
        },
        [theme.breakpoints.up('lg')]: {

        }
    },

    serviciosTxt: {

        color: 'rgb(68, 149, 198)',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '140%',
            marginTop: '10px',
        }
    },
    emergenciaTxt: {
        marginTop: '20px',
        color: 'red',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '160%',
            marginTop: '20px',
            marginBottom: '10px'
        }
    },


}))





function Inicio() {
    const [altoFondoGrad, setAltoFondoGrad] = useState(false);
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        fono: '',
        message: '',
        comuna: '',
        nbeneficiariosedades: '',
        lugardetrabajo: '',

    });
    const [checked, setChecked] = React.useState(false);
    const [CMRchecked, setCMRChecked] = React.useState(false);

    const handleCheck = () => {
        setChecked(prev => !prev);
        if (altoFondoGrad === false) {
            if (window.innerWidth < 500)
                document.getElementById("fondoGrad2").style.height = "1196px";
            else
                document.getElementById("fondoGrad2").style.height = "926px";
            setAltoFondoGrad(true);
        }
        else {
            if (window.innerWidth < 500)
                document.getElementById("fondoGrad2").style.height = "930px";
            else
                document.getElementById("fondoGrad2").style.height = "645px";
            setAltoFondoGrad(false);
        }

    };

    const handleCheckCMR = () => {
        setCMRChecked(prev => !prev);
    };
    const handleChange = name => event => {
        
        setValues({ ...values, [name]: event.target.value });
    };
    const handleSubmit = (event) => {
        const templateId = 'template_OrcUrFqP';
        

        
            sendFeedback(templateId, { name: values.name, email: values.email, phone: values.fono, com: values.message, comuna: values.comuna, beneficiarios: values.nbeneficiariosedades, cmr: CMRchecked, lugar: values.lugardetrabajo })
            setValues({
                name: " ",
                email: " ",
                message: " "
            })
        

    }

    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            alert('Email enviado correctamente!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => alert('Ha ocurrido un error, acá algo de información!:', err))
    }

    document.getElementById("loader").style.display = "none";

    return (

        <React.Fragment>

            <Carrusel />



            <Grid item container xs={12} >
                <Grid id="borderItem" item xs={12} sm={4} lg={4}>
                    <h2 className={classes.serviciosTxt} ><FontAwesomeIcon style={{ color: 'rgb(68, 149, 198)', paddingRight: '5px' }} icon={faFolderOpen} />Servicio al cliente</h2>
                    <h2 className={classes.serviciosTxt}><a href="tel: 6006310310" className={classes.serviciosTxt}>600 6310 310</a></h2>
                </Grid>
                <Grid id="borderItem" item xs={12} sm={4} lg={4}>
                    <h2 className={classes.emergenciaTxt}><FontAwesomeIcon style={{ color: 'red', paddingRight: '5px' }} icon={faAmbulance} />EMERGENCIA <a href="tel:6006310310" className={classes.emergenciaTxt}>800 800 911</a> </h2>
                </Grid>
                <Grid id="borderItem" item xs={12} sm={4} lg={4}>
                    <h2 className={classes.serviciosTxt}><FontAwesomeIcon style={{ color: 'rgb(68, 149, 198)', paddingRight: '5px' }} icon={faFileSignature} />Área de Ventas </h2>
                    <h2 className={classes.serviciosTxt}><a href="tel: 6006310310" className={classes.serviciosTxt}>934 400 227</a> </h2>
                </Grid>

            </Grid>
            <br />  <br />  <br />

            <Grid container style={{ padding: 30 }}>
                <Grid xs={12} sm={6} lg={6}>
                    <Typography className={classes.titulo}>
                        Servicios Destacados
                    </Typography>
                    <Typography className={classes.textField} color="textSecondary" component="p">
                        Somos un servicio de rescate médico que se conecta con usted al instante que nos llama, y lo acompaña durante todo el proceso de solución de la emergencia o imprevisto de salud.
                    </Typography>
                </Grid>

                <Grid container xs={12} sm={6} lg={6}>
                    <Grid xs={12} sm={6} lg={6}>
                        <Typography className={classes.subtitulo} style={{ color: '#4495c6' }} variant="h5">
                            <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faPhone} />Atención 24/7
                    </Typography>
                        <Typography color="textSecondary" className={classes.textField} component="p">
                            Desde el momento en que usted nos llama, en la Central médica será atendido por una enfermera especialista en el manejo de emergencia (riesgo vital) y urgencias.
                    </Typography>

                    </Grid>

                    <Grid xs={12} sm={6} lg={6}>
                        <Typography className={classes.subtitulo} style={{ color: '#4495c6' }} variant="h5">
                            <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faBriefcaseMedical} />Enfermedades menores
                    </Typography>
                        <Typography
                            color="textSecondary" className={classes.textField} component="p" >
                            Para enfermedades menores se puede pedir un médico a su hogar con un pequeño copago reembolsable en su isapre y seguro complementario, si posee.
                    </Typography>

                    </Grid>

                    <Grid xs={12} sm={6} lg={6}>
                        <Typography className={classes.subtitulo} style={{ color: '#4495c6' }} variant="h5">
                            <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faUserMd} />Equipo médico
                    </Typography>
                        <Typography color="textSecondary" component="p" className={classes.textField}>
                            Un equipo médico lo asesorará y resolverá sus preguntas de salud, contamos con una completa base de datos de productos farmacológicos y bromatológicos.
                    </Typography>

                    </Grid>

                    <Grid xs={12} sm={6} lg={6}>
                        <Typography className={classes.subtitulo} style={{ color: '#4495c6' }} variant="h5">
                            <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faHeartbeat} />Clinica móvil
                    </Typography>
                        <Typography color="textSecondary" className={classes.textField} component="p" >
                            En help, las ambulancias son una clinica móvil de alta complejidad de adulto y pediatría.
                    </Typography>

                    </Grid></Grid>

            </Grid>



            <div id="fondoGrad2" className={classes.fondoGrad2}></div>






            <div className={classes.formaFooter}>

                <svg id="forma1" x="0px" y="0px" viewBox="0 0 100 100" width="100%" height="70px" preserveAspectRatio="none" >
                    <path d="M 0,0 V 70 C 7.9990214,45.298551 24.219654,33.575192 41.425299,27.78744 63.669513,20.30478 90.636759,32.617451 100.27621,45.904857 L 100,0 Z"></path>
                </svg>
            </div>


            <div id="sec2">


                <Grid container style={{ marginTop: '2%', zIndex: 3 }} >

                    <Grid align="center" item xs={12} sm={6} lg={6} style={{ zIndex: 4 }}>
                        <img alt='HelpAmbulancia' style={{ width: '70%', marginTop: '50px', marginLeft: '5%' }} src={Ambulancia} />
                    </Grid>

                    <Grid item style={{ paddingLeft: '5%', zIndex: 4 }} xs={12} sm={6} lg={6} >
                        <Typography style={{ color: 'rgb(0,0,0)', paddingTop: '5%' }} variant="h5">
                            <FontAwesomeIcon icon={faEnvelope} /> Solicite un presupuesto</Typography>

                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="Nombre"
                                    className={classes.textField}
                                    value={values.name}
                                    onChange={handleChange('name')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    
                                    type="email"
                                    required
                                    id="outlined-name"
                                    label="E-Mail"
                                    className={classes.textField}
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField

                                    id="outlined-name"
                                    label="Telefono"
                                    className={classes.textField}
                                    value={values.fono}
                                    onChange={handleChange('fono')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="outlined-name"
                                    label="Mensaje"
                                    className={classes.textField}
                                    value={values.message}
                                    onChange={handleChange('message')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControlLabel
                                    control={<Switch checked={checked} onChange={handleCheck} />}
                                    label="Consulta personalizada"
                                    style={{ color: 'black' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Collapse in={checked}>
                                    <TextField
                                        id="outlined-name"
                                        label="Comuna del beneficiario"
                                        className={classes.textField}
                                        value={values.comuna}
                                        onChange={handleChange('comuna')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Collapse>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Collapse in={checked}>
                                    <TextField
                                        id="outlined-name"
                                        label="Numero de beneficiarios y sus edades"
                                        className={classes.textField}
                                        value={values.nbeneficiariosedades}
                                        onChange={handleChange('nbeneficiariosedades')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Collapse>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Collapse in={checked}>
                                    <FormControlLabel
                                        control={<Switch checked={CMRchecked} onChange={handleCheckCMR} />}
                                        label="¿Posee visa CMR Falabella?"
                                        style={{ color: 'black' }}
                                    />
                                </Collapse>

                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Collapse in={checked}>
                                    <TextField
                                        id="outlined-name"
                                        label="Lugar de trabajo"
                                        className={classes.textField}
                                        value={values.lugardetrabajo}
                                        onChange={handleChange('lugardetrabajo')}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Collapse>
                            </Grid>
                            <Grid item style={{ textAlign: 'center' }} xs={12} sm={12}>

                                <Button type="submit" id="btnSubmit" className={classes.boton}>Enviar<FontAwesomeIcon styles={{ paddingLeft: '5px' }} icon={faPaperPlane} /></Button>

                            </Grid>

                            <Grid item style={{ textAlign: 'center', paddingTop: '2%' }} xs={12} sm={12}>
                                <Typography className={classes.textField} color="textSecondary" component="p">
                                    <br /><br />Su mensaje será recibido por el área de ventas.
                            </Typography>
                            </Grid>

                            <Grid item style={{ textAlign: 'center', paddingTop: '2%' }} xs={12} sm={12}>
                                <Typography className={classes.textField} color="textSecondary" component="p">
                                    Teléfono de contacto: <br /><FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faPhone} />934400227
                                </Typography>
                            </Grid>



                        </form>


                    </Grid>
                </Grid>

            </div>



            <div className={classes.formaFooterDown}>

                <svg id="forma2" x="0px" y="0px" viewBox="0 0 100 100" width="100%" height="70px" preserveAspectRatio="none">
                    <path d="M 0,70 V 4.7e-6 C 12.970866,23.04417 22.322183,40.213964 41.425298,42.212562 64.368171,44.612882 80.535118,26.057008 99.999996,25.2 V 70 Z"></path>
                </svg>
            </div>





        </React.Fragment >
    )


}

export default withStyles(useStyles)(Inicio);