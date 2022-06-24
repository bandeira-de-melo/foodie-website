import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import styled from 'styled-components';

function MenuAreaButtons() {
    
    const ButtonsContainerStyle = {
        display:"flex",
        justifyContent:"flex-end",
        alignItems: "center",
    }
    return (
        <div className="menu-area-desktop__btn-container" style={ButtonsContainerStyle}>
            <MenuAreaBtn>
                <IoIosArrowBack />
            </MenuAreaBtn> 
            <MenuAreaBtn>
                <IoIosArrowForward />
            </MenuAreaBtn>
        </div>
    )
}

const MenuAreaBtn = styled.div`
    color:black;
    background: #999;
    font-size:2rem;
    display:flex;
    justifyContent:center;
    gap: .5rem;
    alignItems: center;
    border: none;
    border-radius: 10px;
    padding: .8rem;
    &:hover {
        color: #fff;
        background: #FF6B00;
      }
` 
    
    


export default MenuAreaButtons