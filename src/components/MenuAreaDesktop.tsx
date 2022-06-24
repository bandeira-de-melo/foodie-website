import "../styles/menu-area-desktop.css"
import MenuAreaButtons from "./MenuAreaButtons"
function MenuAreaDesktop() {
  return (
    <div className="menu-area-desktop">
        <div className="menu-area-desktop-container">
        <h2><span>Menu </span>That Makes You Fall in Love</h2>
        <MenuAreaButtons />
        
        <div className="menu-area-desktop__carousel-container">
          image carousel
        </div>
      
        </div>
    </div>
  )
}

export default MenuAreaDesktop