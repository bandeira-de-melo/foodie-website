
import NavMenu from './NavMenu'
import '../styles/Navbar.css'
import Logo from '../assets/images/foodies-logo.svg'
import ButtonCTA from './ButtonCTA'
import useWindowDimensions from '../hooks/useWindowDimensions'



function Navbar(props: any) {
  const windowDimentions = useWindowDimensions()
  
  return (
    <nav className="navbar">
      <div className="navbar__items-container">
        <div className="navbar__logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar__menu-and-signup-container">
          {windowDimentions.width > 685? <NavMenu/> : false }
          <ButtonCTA text={"Sign Up"}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar