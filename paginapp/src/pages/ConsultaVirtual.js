import React, { Component, Fragment } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, Typography, Grid } from '@material-ui/core';
import '../components/Carrusel/Carrusel.css'

const s = {
    container: "screenW screenH dGray col ",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter",
    image: "fullW fullH imgCover"
};



export class ConsultaVirtual extends Component {
    beneficiosCard = () => {

        return (
            <React.Fragment>
                <div id="bcCont" style={{ position:'relative', padding: '5%', marginTop: '5%',marginBottom:'5%',width:'50%',left:'20%', height: 'auto', backgroundColor: "rgb(232, 231, 231)" }}>
                    <Grid container xs={12} sm={12}>
                        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }} >
                            <img src="https://www.help.cl/wp-content/themes/help_template/assets/img/teleconsulta/iconos/icono-user_2.png" />
                        </Grid>
                        <Grid item xs={12} sm={6}  style={{ paddingTop: '2%' }}>
                            <Typography variant="body1" color="textPrimary" >Obtenga la atención de un médico online ante situaciones de salud menores.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}  style={{ textAlign: 'center', paddingTop: '5%' }} >
                            <img src="https://www.help.cl/wp-content/themes/help_template/assets/img/teleconsulta/iconos/icono-reloj_2.png" />
                        </Grid>
                        <Grid item xs={12} sm={6}  style={{ textAlign: 'center', paddingTop: '5%' }}>
                            <Typography variant="body1" color="textPrimary" >Atención las 24 horas del día. </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}  style={{ textAlign: 'center', paddingTop: '5%' }} >
                            <img src="https://www.help.cl/wp-content/themes/help_template/assets/img/teleconsulta/iconos/icono-documentos_2.png" />
                        </Grid>
                        <Grid item xs={12} sm={6}  style={{ textAlign: 'center', paddingTop: '5%' }}>
                            <Typography variant="body1" color="textPrimary" >Cuando corresponda, el médico de Help le entregará ordenes de exámenes y recetas simples (no retenidas). </Typography>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        )
    }

    componentDidMount() {
        document.getElementById("loader").style.display = "none";
    }
    componentDidUpdate() {
        document.getElementById("loader").style.display = "initial";
    }
    render() {
        return (
            <div style={{ display: 'block',textAlign:'center', position:'relative', top:'50px' }}>
                <img className={s.image} src="https://www.help.cl/wp-content/themes/help_template/assets/img/teleconsulta/banner-consulta-medica-virtual-1366x300.jpg" ></img>
                <div>
                    <Typography variant="h3" color="textPrimary" style={{margin:'5%', fontSize:'25px'}} >Obtenga la atención de un médico online ante situaciones de salud menores.</Typography>
                    <Typography variant="body1" color="textPrimary">• RESFRÍO COMÚN • GRIPE • FIEBRE • OTITIS • DOLOR DE GARGANTA • ALERGIA</Typography>
                    <Typography variant="body1" color="textPrimary">• CEFALEA • LUMBAGO • GASTROENTERITIS • MOLESTIA URINARIA • TOS</Typography>

                </div>
                {this.beneficiosCard()}

                <div>
                <Typography variant="body1" color="textPrimary">* El presente servicio no aplica para situaciones de urgencia o emergencia médica, ni reemplaza a su médico tratante. El servicio de Consulta médica virtual es complementario al rescate médico móvil que presta Help y no se vende en forma separada.</Typography>
                </div>
            </div>

        )
    }
}

export default ConsultaVirtual
