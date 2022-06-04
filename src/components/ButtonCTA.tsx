
import '../styles/buttoncta.css'

function ButtonCTA(props:any) {
  return (
    <a href='#' className={`buttoncta ${props.className}`}>
       {props.text}     
    </a>
  )
}

export default ButtonCTA