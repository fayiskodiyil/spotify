import React from 'react';
import styled from "styled-components";
import background from "../assets/images/bg.jpg";


function Spotlight() {
    return (
    <>
    
        
       <SpotContainer style={{ backgroundImage: `url(${background})`,overflow:'hidden' }}>
           <TextContainer>
                <MainText>Listening Is Everything</MainText>
                <SpanText>Millons of songs No podcast needed</SpanText>
                <ButtonBox>Get Spotify Free!</ButtonBox>
           </TextContainer>
           
        </SpotContainer>
      
        </>
    )
}

const SpotContainer  = styled.div`
    display: 100vh;
    align-items:center
`;
const TextContainer  = styled.div`
    padding:30px;
    text-align:center;
`;
const MainText  = styled.h1`
    font-size:180px;
    font-weight:bold;
    color:#42f54e;
    margin-bottom:30px;
`;
const SpanText  = styled.p`
    font-size:20px;
    margin: 0 auto;
    color:#42f54e;
    font-weight:600;
`;
const ButtonBox  = styled.button`
    background:#42f54e;
    padding:12px 18px;
    border-radius:20px;
    font-size:18px;
    color:#064dbf;
    margin-top:30px;
    font-weight:500;
`;

export default Spotlight
