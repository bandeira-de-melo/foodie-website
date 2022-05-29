import React from 'react'
import '../styles/buttoncta.css'

function ButtonCTA(props:any) {
  return (
    <a href='#' className="buttoncta">
       {props.text}     
    </a>
  )
}

export default ButtonCTA