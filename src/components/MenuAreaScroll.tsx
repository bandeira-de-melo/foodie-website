import styled from "styled-components"
import MenuAreaDesktopCategory from "./MenuAreaDesktopCategory"
import Burger from '../assets/images/burger-icon.png'
import Pizza from '../assets/images/pizzaslice-icon.png'
import Ramen from '../assets/images/ramen-icon.png'
import Chicken from '../assets/images/fried-chicken-icon.png'

function MenuAreaScroll() {
    const Icons = [Burger, Pizza, Ramen, Chicken]
  return (
    <ScrollContainer>
        {Icons.map(icon =>{
          return <MenuAreaDesktopCategory categoryIcon={icon} />
        })}
    </ScrollContainer>
  )
}

const ScrollContainer = styled.div`
  width: "100%";
  height: "200px";
  overflow: "scroll";
  display: "flex";
  flex-direction: 'column;
`

export default MenuAreaScroll