import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { faAmbulance,faPhone,faBriefcaseMedical,faUserMd,faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const useStyles = makeStyles(theme => ({
    root: {
        color: 'black'
    },
    titulo:{
        color:'red',
        fontSize: '2.92rem',
    }
}))

export default class Inicio extends Component {
    state = {
        style: useStyles,

    }
    render() {
        return (
            
            <Grid container xs={12} sm={12} >
                <Grid item xs={12} >
                    <p style={{ color: 'red', textAlign: 'center' }}><FontAwesomeIcon style={{ color: 'red',paddingRight:'5px' }} icon={faAmbulance} />FONO EMERGENCIA 800 800 911 </p>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography style={{ color: 'black', fontSize: "2.92rem", lineHeight: '110%', margin: '1.9466666667rem 0 1.168rem 0' }}>
                        Servicios Destacados
                    </Typography>
                    <Typography style={{color:'black',
                        fontSize: '17px', textAlign: 'justify',float:'left',marginLeft:'auto',width:'80%',left:'auto',right:'auto'
                    }} variant="body2" color="textSecondary" component="p">
                        Somos un servicio de rescate médico que se conecta con usted al instante que nos llama, y lo acompaña durante todo el proceso de solución de la emergencia o imprevisto de salud.
                    </Typography>
                </Grid>

                <Grid item container xs={12} sm={6}>
                    <Grid item xs={12} sm={6}>
                        <Typography style={ {color:'#4495c6'} } variant="h5">
                        <FontAwesomeIcon style={{paddingRight:'5px'}} icon={faPhone} />Atención 24/7
                    </Typography>
                        <Typography style={{color:'black',
                        fontSize: '17px', textAlign: 'justify',float:'left',marginLeft:'auto',width:'80%',left:'auto',right:'auto'
                    }} variant="body2" color="textSecondary" component="p">
                            Desde el momento en que usted nos llama, en la Central médica será atendido por una enfermera especialista en el manejo de emergencia (riesgo vital) y urgencias.
                    </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography style={ {color:'#4495c6'} } variant="h5">
                        <FontAwesomeIcon style={{paddingRight:'5px'}} icon={faBriefcaseMedical} />Enfermedades menores
                    </Typography>
                        <Typography style={{color:'black',
                        fontSize: '17px', textAlign: 'justify',float:'left',marginLeft:'auto',width:'80%',left:'auto',right:'auto'
                    }} variant="body2" color="textSecondary" component="p">
                            Para enfermedades menores se puede pedir un médico a su hogar con un pequeño copago reembolsable en su isapre y seguro complementario, si posee.
                    </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography style={ {color:'#4495c6'} } variant="h5">
                        <FontAwesomeIcon style={{paddingRight:'5px'}} icon={faUserMd} />Equipo médico
                    </Typography>
                        <Typography style={{ color:'black',
                        fontSize: '17px', textAlign: 'justify',float:'left',marginLeft:'auto',width:'80%',left:'auto',right:'auto'
                    }} variant="body2" color="textSecondary" component="p">
                            Un equipo médico lo asesorará y resolverá sus preguntas de salud, contamos con una completa base de datos de productos farmacológicos y bromatológicos.
                    </Typography>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography style={ {color:'#4495c6'} } variant="h5">
                        <FontAwesomeIcon style={{paddingRight:'5px'}} icon={faHeartbeat} />Clinica móvil
                    </Typography>
                        <Typography style={{
                        color:'black',fontSize: '17px', textAlign: 'justify',float:'left',marginLeft:'auto',width:'80%',left:'auto',right:'auto'
                    }} variant="body2" color="textSecondary" component="p">
                            En help, las ambulancias son una clinica móvil de alta complejidad de adulto y pediatría.
                    </Typography>

                    </Grid>
                </Grid>

                <Grid xs={12} sm={12}>
                    <Grid item xs={12} sm={6}>

                    </Grid>
                    <Grid item xs={12} sm={6}>

                    </Grid>
                </Grid>

            </Grid>
        )

    }
}

