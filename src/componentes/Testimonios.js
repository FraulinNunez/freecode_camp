import React from 'react';
import './hoja-de-estilos/Testimonio.css'

function testimonio(props){
    return (
        <div className='contenedor-testimonio' >
            <img className='imagen-testimonio' 
            src={require(`../imagenes/${props.imagen}.png`)}
             alt='emma' >
            </img>

            <div className='contenedor-texto-textimonio' >
                <p className='nombre-testimonio' > <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio' >{props.testimonio}</p>
            </div>

        </div>


    )
}

export default testimonio; 