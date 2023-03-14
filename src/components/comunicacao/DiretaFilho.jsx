import React from 'react'

export default props => {
    return( 
    <div>
     <span>{props.nome} </span>
     <span> <storng> {props.idade} </storng> </span>
     <span>{props.nerd ? 'Verdadeiro' : 'Falso'}!</span>
    </div>
    )
}