//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Dots from "./Dots";
import Typography from "@material-ui/core/Typography";



//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "fullW screenH rel overflowH",
    onScreen: "left0",
    offScreenRight: "left100vw",
    offScreenLeft: "leftM100vw",
    transition: "transition1l"
};
//===========================================
// STYLES OBJECT slide
//===========================================

const sl = {
    container: "dFlex abs fullW fullH dGray",
    slideImage: "fullW fullH imgCover",
    block:"dBlock halfW",

    formaCarro: {
        marginLeft: '0% !important;',

        left: '0',
        width: '100%',
        marginTop: '-30px',
        float:'left',
        backgroundColor:'black'
    }
};

//===========================================
// SLIDE FUNCTIONAL COMPONENT
//===========================================


const Slide = ({ position, transition, image,titulo,descripcion }) => {
    
    return (
        <div className={sl.container + " " + position + " " + transition}>
            <div id="txtCarrusel" className={sl.block} >
                <Typography variant="h4" style={{color:'Green',textAlign:'center',marginTop:'3%'}}>{titulo}</Typography>
                <Typography variant="h5" style={{color:'Black',textAlign:'center',margin:'4%'}}>{descripcion}</Typography>
            </div>
            
            <div >
                
                <img src={image} id="slimages" className={sl.slideImage}  />
            </div>
            
            
        </div>
        

    );
};
//===========================================
// SLIDESHOW COMPONENT
//===========================================
class Slideshow extends Component {
    constructor(props) {

        super(props);
        this.state = {
                slide1: {
                    titulo:"Help Rescate Médico",
                    descripcion:"Frente a una emergencia o urgencia médica le enviaremos un móvil al lugar del incidente, con un doctor(a), un enfermero(a) y un paramedico(a).",
                    id: 0,
                    position: s.onScreen,
                    transition: true
                },
                slide2: {
                    titulo:"Help Rescate Médico",
                    descripcion:"En una situación de emergencia y de riesgo vital, los primeros minutos son clave.",
                    id: 1,
                    position: s.offScreenRight,
                    transition: true
                },
                slide3:{
                    titulo:"Help Rescate Médico",
                    descripcion:"Nuestros pacientes son estabilizados en el lugar del incidente, luego son trasladados si es necesario.",
                    id: 3,
                    position: s.offScreenLeft,
                    transition: true
                },
            
            currentId: 0
        };
    }

    componentDidMount() {
        this.startCarousel();
    }

    componentDidUnmount() {
        clearInterval(this.carouselInterval);
    }

    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            this.transitionSlides();
        }, 16000);
    };

    setSlideState = (slide1, slide2, currentId) => {
        this.setState({
            slides:{slide1: slide1},
            slides:{slide2:slide2},
            currentId: currentId
        });
    };

    transitionSlides = () => {
        const { slide1, slide2 } = this.state;
        let currentId;
        if (slide1["position"] === s.onScreen) {
            slide1["position"] = s.offScreenLeft;
            slide2["position"] = s.onScreen;
            currentId = slide2.id;
        } else {
            slide1["position"] = s.onScreen;
            slide2["position"] = s.offScreenLeft;
            currentId = slide1.id;
        }
        this.setSlideState(slide1, slide2, currentId);
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 1000);
    };

    resetSlideOffScreen = () => {
        const { slide1, slide2, currentId } = this.state;
        const { slides } = this.props;
        if (slide1["position"] === s.offScreenLeft) {
            slide1["transition"] = false;
            slide1["position"] = s.offScreenRight;
            slide1["id"] = slide2.id + 1 === slides.length ? 0 : slide2.id + 1;
        } else {
            slide2["transition"] = false;
            slide2["position"] = s.offScreenRight;
            slide2["id"] = slide1.id + 1 === slides.length ? 0 : slide1.id + 1;
        }
        this.setSlideState(slide1, slide2, currentId);
        this.resetSlideTransitions(slide1, slide2, currentId);
    };

    resetSlideTransitions = (slide1, slide2, currentId) => {
        setTimeout(() => {
            slide1["transition"] = true;
            slide2["transition"] = true;
            this.setSlideState(slide1, slide2, currentId);
        }, 500);
    };

    render() {
        const { slide1, slide2,slide3, currentId } = this.state;
        const { slides } = this.props;
        return (
            <div className={s.container}>
                <Slide
                    titulo={slide1.titulo}
                    descripcion={slide1.descripcion}
                    image={slides[slide1.id]}
                    position={slide1.position}
                    transition={slide1.transition ? s.transition : ""}
                />
                <Slide
                    titulo={slide2.titulo}
                    descripcion={slide2.descripcion}
                    image={slides[slide2.id]}
                    position={slide2.position}
                    transition={slide2.transition ? s.transition : ""}
                />
                <Slide
                    titulo={slide3.titulo}
                    descripcion={slide3.descripcion}
                    image={slides[slide3.id]}
                    position={slide3.position}
                    transition={slide3.transition ? s.transition : ""}
                />
                <Dots slideId={currentId} slides={slides} />
            </div>
        );
    }
}

export default Slideshow;