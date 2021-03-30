import React from 'react';
import styled from "styled-components";

function Footer() {
    return (
        <>
        <SpotContainer>
           <LeftContainer>
           <ItemList>
                   <ListHead><Logo 
                src={require("../assets/images/logo.png").default}
                alt="Logo"
            /></ListHead>
                   
                </ItemList>
               <ItemList>
                   <ListHead>Company</ListHead>
                   <ListItem>About </ListItem>
                   <ListItem>Jobs </ListItem>
                   <ListItem>Records</ListItem>
                </ItemList>

                <ItemList>
                   <ListHead>Communities</ListHead>
                   <ListItem>Artists </ListItem>
                   <ListItem>Devolepers</ListItem>
                   <ListItem>Advertising</ListItem>
                   <ListItem>Investors</ListItem>
                </ItemList>

                <ItemList>
                   <ListHead>Links</ListHead>
                   <ListItem>Support</ListItem>
                   <ListItem>Web</ListItem>
                   <ListItem>Mobile App</ListItem>
                </ItemList>
                <ItemList>
                   <ListHead>Plans</ListHead>
                   <ListItem>Individual</ListItem>
                   <ListItem>Student</ListItem>
                   <ListItem>Duo</ListItem>
                   <ListItem>Family</ListItem>
                </ItemList>
             
            </LeftContainer>
            <RightContainer>
                <ImageBox> <Imag src={require("../assets/images/instagram.png").default}
                alt="Logo" /></ImageBox>
                 <ImageBox> <Imag src={require("../assets/images/twitter.png").default}
                alt="Logo" /></ImageBox>
            </RightContainer>         
        </SpotContainer>
        </>
    )
}

const SpotContainer  = styled.div`
    background:#000;
    display:flex;
    padding:50px;
`;
const LeftContainer  = styled.ul`
    display:flex;
    align-items:space-between;
`;
const ItemList  = styled.li`
   margin-right:30px;
`;
const Logo = styled.img`
width: 150px;
display: block;
hieght: 70px;
padding-left:150px;
`;

const ListHead  = styled.h6`
    color:#6b7078;
    font-size:22px;
`;
const ListItem  = styled.h6`
   color:#fff; 
   font-size:20px;
`;

const RightContainer  = styled.div`
    display:flex;
    align-items:center;
    padding:50px;
`;

const ImageBox  = styled.div`
    width:50px;
    border-radius:50%;
    background:#fff;
    margin-right:20px;
    
`;
const Imag = styled.img`
 width:100%;
 hieght:100%;
`;



export default Footer
