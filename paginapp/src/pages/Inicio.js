import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { faAmbulance, faPhone, faBriefcaseMedical, faUserMd, faHeartbeat, faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',

    },
    forma1:{fill:'#f7f5f5',
    margiBottom: '10%', width:'100%'}
}))





function Inicio() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
        <Grid container xs={12} sm={12} >
            <Grid item xs={12} >
                <p style={{ color: 'red', textAlign: 'center' }}><FontAwesomeIcon style={{ color: 'red', paddingRight: '5px' }} icon={faAmbulance} />FONO EMERGENCIA 800 800 911 </p>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography style={{ color: 'black', fontSize: "2.92rem", lineHeight: '110%', margin: '1.9466666667rem 0 1.168rem 0' }}>
                    Servicios Destacados
                    </Typography>
                <Typography style={{
                    color: 'black',
                    fontSize: '17px', textAlign: 'justify', float: 'left', marginLeft: 'auto', width: '80%', left: 'auto', right: 'auto'
                }} variant="body2" color="textSecondary" component="p">
                    Somos un servicio de rescate médico que se conecta con usted al instante que nos llama, y lo acompaña durante todo el proceso de solución de la emergencia o imprevisto de salud.
                    </Typography>
            </Grid>

            <Grid item container xs={12} sm={6}>
                <Grid item xs={12} sm={6}>
                    <Typography style={{ color: '#4495c6' }} variant="h5">
                        <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faPhone} />Atención 24/7
                    </Typography>
                    <Typography style={{
                        color: 'black',
                        fontSize: '17px', textAlign: 'justify', float: 'left', marginLeft: 'auto', width: '80%', left: 'auto', right: 'auto'
                    }} variant="body2" color="textSecondary" component="p">
                        Desde el momento en que usted nos llama, en la Central médica será atendido por una enfermera especialista en el manejo de emergencia (riesgo vital) y urgencias.
                    </Typography>

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography style={{ color: '#4495c6' }} variant="h5">
                        <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faBriefcaseMedical} />Enfermedades menores
                    </Typography>
                    <Typography style={{
                        color: 'black',
                        fontSize: '17px', textAlign: 'justify', float: 'left', marginLeft: 'auto', width: '80%', left: 'auto', right: 'auto'
                    }} variant="body2" color="textSecondary" component="p">
                        Para enfermedades menores se puede pedir un médico a su hogar con un pequeño copago reembolsable en su isapre y seguro complementario, si posee.
                    </Typography>

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography style={{ color: '#4495c6' }} variant="h5">
                        <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faUserMd} />Equipo médico
                    </Typography>
                    <Typography style={{
                        color: 'black',
                        fontSize: '17px', textAlign: 'justify', float: 'left', marginLeft: 'auto', width: '80%', left: 'auto', right: 'auto'
                    }} variant="body2" color="textSecondary" component="p">
                        Un equipo médico lo asesorará y resolverá sus preguntas de salud, contamos con una completa base de datos de productos farmacológicos y bromatológicos.
                    </Typography>

                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography style={{ color: '#4495c6' }} variant="h5">
                        <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faHeartbeat} />Clinica móvil
                    </Typography>
                    <Typography style={{
                        color: 'black', fontSize: '17px', textAlign: 'justify', float: 'left', marginLeft: 'auto', width: '80%', left: 'auto', right: 'auto'
                    }} variant="body2" color="textSecondary" component="p">
                        En help, las ambulancias son una clinica móvil de alta complejidad de adulto y pediatría.
                    </Typography>

                </Grid>
            </Grid>

            <Grid style={{ marginTop: '2%' }} container xs={12} sm={12}>
                <svg className={classes.forma1}>
                        <path d="M 0,0 V 70 C 7.9990214,45.298551 24.219654,33.575192 41.425299,27.78744 63.669513,20.30478 90.636759,32.617451 100.27621,45.904857 L 100,0 Z"/>
                
                </svg>
            <Grid item xs={12} sm={6}>
                <img alt='HelpAmbulancia' style={{ width: '100%', marginRight: '1%' }} src='https://www.help.cl/wp-content/themes/help_template/assets/img/home/1.jpg' />
            </Grid>
            <Grid item style={{ padding: '1%' }} xs={12} sm={6}>
                <Typography style={{ color: 'rgb(0,0,0)', textAlign: 'center' }} variant="h5">
                    <FontAwesomeIcon style={{ paddingRight: '5px' }} icon={faEnvelope} /> Solicite un presupuesto</Typography>
                <form noValidate autoComplete="off">
                    <Grid item xs={12} sm={12}>
                        <TextField
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
                            id="outlined-name"
                            label="E-Mail"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="outlined-name"
                            label="Telefono"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="outlined-name"
                            label="Comentarios"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={{ textAlign: 'center' }} xs={12} sm={12}>
                        <Button style={{ backgroundColor: '#2bbbad', color: 'white' }}>Enviar<FontAwesomeIcon styles={{ paddingLeft: '5px' }} icon={faPaperPlane} /></Button>

                    </Grid>

                    <Grid item style={{ textAlign: 'center', paddingTop: '2%' }} xs={12} sm={12}>
                        <Typography style={{
                            color: 'black', fontSize: '17px', float: 'center', marginLeft: 'auto', width: '100%', left: 'auto', right: 'auto'
                        }} variant="body2" color="textSecondary" component="p">
                            Su mensaje será recibido por el área de ventas.
                            </Typography>
                    </Grid>

                    <Grid item style={{ textAlign: 'center', paddingTop: '2%' }} xs={12} sm={12}>
                        <Typography style={{
                            color: 'black', fontSize: '17px', float: 'center', marginLeft: 'auto', width: '100%', left: 'auto', right: 'auto'
                        }} variant="body2" color="textSecondary" component="p">
                            Teléfono de contacto: 934400227 <FontAwesomeIcon style={{ paddingLeft: '5px' }} icon={faPhone} />
                        </Typography>
                    </Grid>



                </form>
            </Grid>
        </Grid>

        </Grid >
    )
}

export default withStyles(useStyles)(Inicio);