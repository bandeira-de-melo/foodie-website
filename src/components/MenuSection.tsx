import useWindowDimensions from '../hooks/useWindowDimensions'
import '../styles/menu-section.css'
import MenuAreaDesktop from './MenuAreaDesktop'
import MenuIconsMobile from './MenuIconsMobile'
import MenuImagesCarrousel from './MenuImagesCarrousel'
import MenuScrowArea from './MenuScrowArea'


function MenuSection() {
  const wDimentions = useWindowDimensions()
  return (
    <section className="menu-section">
      <div className="menu-section__container">
        
        
        {wDimentions.width > 685?
        <MenuAreaDesktop /> 
        : false}
        <div className="menu-section-icons-select__container">
          
          {wDimentions.width < 685? 
          
          <>
          <h2> <span>Menu </span>That Makes You Fall in Love</h2>
          <MenuIconsMobile /> 
          <MenuImagesCarrousel />
          </>
          
          : false}
        </div>
        <div className="menu-cta">
          <a href="#">More menu &gt </a>
        </div>
      </div>
    </section>
  )
}

export default MenuSection