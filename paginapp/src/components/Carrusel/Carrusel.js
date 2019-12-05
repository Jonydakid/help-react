//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slideshow from "./Slideshow.js";
import slide1 from "./imgs/doctora.jpg";
import slide2 from "./imgs/bebe2.png";
import slide3 from "./imgs/camion.png";
import "./Carrusel.css";

//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "screenW screenH dGray col ",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3];

//===========================================
// CARRUSEL COMPONENT
//===========================================
class Carrusel extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.main}>
                    
                    <Slideshow slides={slides} />
                </div>
            </div>


        );
    }
}

export default Carrusel;