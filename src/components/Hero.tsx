
import HeroImage from '../assets/images/hero-img.png'
import ArrowRight from '../assets/images/arrow-right.svg'
import '../styles/hero.css'
import ButtonCTA from './ButtonCTA'

function Hero() {
 
  return (
    <section className='hero'>
      <div className="hero__items-container">
        <div className="hero__image-container">
          <img src={HeroImage} alt="" />
        </div>
        <div className="hero__content-container">
          <div className="hero__cta-container">
            <ButtonCTA text={"New Menu"}/> 
            <a href="#" className='cta-outter-content'>Get 20% discount . <img src={ArrowRight} alt="" /></a>
          </div>
          <h1 className="hero__title">Fastest & Cheapest<span> Food </span>is in Your Hand</h1>
          <p className='hero__text'>Delicious meals and snacks garanteed as fast as a bolt.</p>
        </div>
      </div> 
    </section>
  )
}

export default Hero