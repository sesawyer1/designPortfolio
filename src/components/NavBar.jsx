import {Link} from "react-router-dom"
import styled from "styled-components"

const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 17px;
`

const NavBarTitle = styled (Link)`
    text-decoration: none;
    font-size: 20px;
    margin-left: 27px;
    color: black;
    
`

const NavBarItem = styled (Link)`
    text-decoration: none;
    margin-left: 28px;
    color: black;

    &:hover {
        text-decoration: underline; // Underline on hover
    }

`


const NavBar  = () => {

    return (
        <NavBarContainer>
            <NavBarTitle to="/designPortfolio">SARAH SAWYER</NavBarTitle>
            <div style={{marginRight:'80px'}}>
                <NavBarItem to="/projects">Works</NavBarItem>
                <NavBarItem to="/contact">Contact</NavBarItem>
                <NavBarItem to="/about">About Me</NavBarItem>
            </div>
            
        </NavBarContainer>
    )
}

export default NavBar;