import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';

import styled from "styled-components"

//images for homepage-log-reg
import bg from '../images/homepage/bg.png';
import deer from '../images/homepage/deer.png';
import parrot from '../images/homepage/parrot.png';
import shark from '../images/homepage/shark.png';
import gorilla from '../images/homepage/gorilla.png';
import crocodile from '../images/homepage/crocodile.png';
import snake from '../images/homepage/snake.png';

//styles for body********************************
let Body = styled.body`
box-sizing: border-box;
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
height: 100vh;

@media (max-width: 512px) {
  /* height: 100vh; */
  /* height:100%; */
  margin: 0;
  padding: 0;
}

`;

let Header = styled.header`
height: 120px;
background: #6C46A2;
display: flex;
`;

let Section = styled.section`
display: flex;
align-content: center;
text-align: center;
width: 100%;
padding-top: 5%;
position: relative;

@media ( max-width: 512px ) {
  display: flex;
  flex-direction: column;
}
`;

let ImgTitleCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding-left: 150px;

@media ( max-width: 512px ) {
  padding: 0;
  flex-direction: column-reverse;
}
`;

let Img6Cont = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 80%;
/* @media (max-width: 1024px) {

} */
`;

let Images = styled.img`
width: 50%;
margin: 3%;
`;

let TitleCont = styled.div`
width: 60%;
display: flex;
flex-direction: column;
text-align: center;
padding: 2%;
margin: 5%;
background-color: rgba(20,73,91);
color: rgba(255,163,128);

@media (max-width: 1024px) {
  width: 90%;
}
`;

let Buttons = styled.button`
width: 100%;
height: 70px;
background: #6C46A2;
color: white;
font-size: 2rem;
font-family: 'Patua One';
margin: 2% 0;
border: 1px solid gray;
cursor: pointer;
text-shadow: 2px 2px black;
box-shadow: 1px 1px 3px black;
&:hover{
  background: rgba(255,23,23, .5);
  text-shadow: 2px 2px 5px red;
  box-shadow: 1px 1px 5px black;
}

@media (max-width: 1026px) {
  width: 100%;
  height: 40px;
  margin-right: 0;
  font-size: 1.2rem;
}
`;

let Links = styled(Link)`
  text-decoration:none;
  display: flex;
  justify-content: center;
  /* width: 250px; */
  width: 40%;
`;

let ButtonContainer = styled.div`
width: 80%;
padding: 30px 0;
display: flex;
flex-direction: column;
margin: auto 0;
margin-bottom: 17%;
align-content: center;
/* @media (max-width: 1024px) {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  } */

  @media ( max-width: 512px ) {
    width: 100%;
    align-items: center;
}
`;


function HomePage() {

    return (
      <Body>
        <Header>
            <NavBar />
        </Header>
        <Section className='background-image-home'>
            <ImgTitleCont className='img-title-cont'>
                <Img6Cont className='image6-cont'>
                    <div className='overlay-cont'>
                      <Images className='images6' src={gorilla}/>
                      <div className='overlay1'>..Banana</div>
                    </div>
                    <div className='overlay-cont'>
                      <Images className='images6' src={parrot}/>
                      <div className='overlay1'>Hello!</div>
                    </div>
                    <div className='overlay-cont'>
                      <Images className='images6' src={snake}/>
                      <div className='overlay1'>Hiss..</div>
                    </div>
                    <div className='overlay-cont'>
                      <Images className='images6' src={crocodile}/>
                      <div className='overlay1'>..</div>
                    </div>
                    <div className='overlay-cont'>
                      <Images className='images6' src={shark}/>
                      <div className='overlay1'>I'm exited!</div>
                    </div>
                    <div className='overlay-cont'>
                      <Images className='images6' src={deer}/>
                      <div className='overlay1'>Lets go!</div>
                    </div>
                </Img6Cont>
              <TitleCont>
                <h2 className='h2title'>Create your very own Gigapet</h2>
                <h3 className='h3subtitle'>Get your kids eating healthy today!</h3>
              </TitleCont>
            </ImgTitleCont>
            <ButtonContainer className='log-reg-btn'>
              <Links to="/login" style={{textDecoration: 'none'}}><Buttons>Login</Buttons></Links>
              <Links to="/registration" style={{textDecoration: 'none'}}><Buttons>Register</Buttons></Links>
              {/* <Links to="/creategigapet" style={{textDecoration: 'none'}}><Buttons>Gigapet</Buttons></Links> */}
            </ButtonContainer>
        </Section>
      </Body>
    );
  }
  
  export default HomePage;

