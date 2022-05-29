
import NavMenu from './NavMenu'
import '../styles/Navbar.css'
import Logo from '../assets/images/foodies-logo.svg'
import ButtonCTA from './ButtonCTA'
function Navbar(props: any) {
  return (
    <nav className="navbar">
      <div className="navbar__items-container">
        <div className="navbar__logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar__menu-and-signup-container">
          <NavMenu />
          <ButtonCTA text={"Sign Up"}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar