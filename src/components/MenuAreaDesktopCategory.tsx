import styled from 'styled-components'
import BurgerIcon from '../assets/images/burger-icon.png'
function MenuAreaDesktopCategory() {
  const IconStyle = {
    borderRadius: "50%",
    padding: ".5rem",
    background: "#fff"
  }
  return (
    <CategoryContainer>
        <div className="categoty-image" style={IconStyle}>
          <img src={BurgerIcon} alt="" />
        </div>
        <p>Burguer</p>
    </CategoryContainer>
  )
}

const CategoryContainer = styled.div`
  width: 90%;
  padding: .5rem;
  display: flex;
  align-items: center;
  gap: .8rem;
  background: #FF6B00;
  border-radius: 10px;
  p {
    font-size: 1.2rem;
    color: #fff;
  }

`

export default MenuAreaDesktopCategory