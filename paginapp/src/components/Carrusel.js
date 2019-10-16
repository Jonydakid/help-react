import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Carrusel(props) {
    
    return (
        <React.Fragment>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={500} stopOnHover={false}>
                <div >
                    <img src="https://servicio-rescatemedico.cl/img/doctora.jpg" />
                    <p className="legend">EJEJEEJE</p>
                </div>
                <div>
                    <img src="https://servicio-rescatemedico.cl/img/bebe2.png" />
                    <p className="legend">EJEJEEJE 2</p>
                </div>
                <div>
                    <img src="https://servicio-rescatemedico.cl/img/camion.JPEG" />
                    <p className="legend">EJEJEEJE 3</p>
                </div>
            </Carousel>
        </React.Fragment>
            )
        }
        
        
        
        
