import ArrowRight from '../assets/images/arrow-right.svg'
import ButtonCTA from './ButtonCTA'
import '../styles/hero-CTA-container.css'

function HeroCTAContainer() {
  return (
    <div className="hero__cta-container">
        <ButtonCTA text={"New Menu"}/> 
        <a href="#" className='cta-outter-content'>Get 20% discount . <img src={ArrowRight} alt="" /></a>
    </div>
  )
}

export default HeroCTAContainer