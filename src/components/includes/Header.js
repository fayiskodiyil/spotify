import styled from "styled-components";
import React from 'react';


function Header() {
    return (
        <HeaderContainer>
            <Logo 
                src={require("../assets/images/logo.png").default}
                alt="Logo"
            />
            <RightContainer>
               <Nav>
                   <NavItem >Premium</NavItem>
                   <NavItem>Support</NavItem>
                   <NavItem>Download</NavItem>
                   <NavItem>|</NavItem>
                   <NavItem>Login</NavItem>
                   <NavItem>Sign-up</NavItem>
               </Nav>
            </RightContainer>
        </HeaderContainer>
    );
}
const HeaderContainer = styled.div`
    background:#000;
    margin: 0 auto;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
`;
const Logo = styled.img`
width: 150px;
display: block;
hieght: 70px;
padding-left:150px;

`;
const RightContainer = styled.div`
display: flex;
align-items: center;
`;

const Nav = styled.ul`
display: flex;
align-items: center;
`;
const NavItem = styled.li`
    list-style:none;
    margin-right:30px;
    font-weight:bold;
    color:#fff;
`;
export default Header
