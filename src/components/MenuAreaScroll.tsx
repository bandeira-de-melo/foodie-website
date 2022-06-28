
import MenuAreaDesktopCategory from "./MenuAreaDesktopCategory"

function MenuAreaScroll() {
    const MenuAreaScrollStyle = {
        width: "100%",
        height: "500px",
        overflow: "scroll",
        display: "flex",
        FlexDirection: 'column'
    }
  return (
    <div className="menu-area-desktop_scroll-container" style={MenuAreaScrollStyle}>
          <MenuAreaDesktopCategory />
          <MenuAreaDesktopCategory />
          <MenuAreaDesktopCategory />
          <MenuAreaDesktopCategory />
    </div>
  )
}


export default MenuAreaScroll