import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';


import styled from "styled-components"


let Body = styled.body`
box-sizing: border-box;
/* height: 100vh; */
/* background: #C9C8C8; */
`;

let Header = styled.header`
height: 120px;
background: #6C46A2;
display: flex;
`;

let Section = styled.section`
width: 100%;
margin: auto 0;
/* height: 100vh; */
`;

let TitleCont = styled.div`
width: 100%;
display: flex;
flex-direction: column;;
text-align: center;
padding-top: 40px;
`;

// let HeaderInnerContainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// margin: 0 auto;
// max-width: 1440px;
// width: 100%;
// color: white;
// `;

// let Span = styled.span`
// color: white;
// font-size: 1.4rem;
// font-family: Hind Madurai;
// text-decoration: none;
// `;

// let Nav = styled.nav`
// width: 20%;
// display: flex;
// justify-content: space-between;
// `;

let Buttons = styled.button`
width: 100%;
height: 100px;
background: #6C46A2;
color: white;
font-size: 2rem;
margin: 2% 0;
padding: 5% 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-self: center;
border: 1px solid gray;
cursor: pointer;
text-shadow: 2px 2px black;
box-shadow: 1px 1px 3px black;
&:hover{
  background: red;
  opacity: .5;
  box-shadow: 1px 1px 5px black;
}
`;

let Links = styled(Link)`
text-decoration: none;
`;

let ButtonContainer = styled.div`
width: 40%;
padding: 30px 0;
display: flex;
flex-direction: column;
margin: 0 auto;
`;


function HomePage() {
  return (
    <Body>
      <Header>
          <NavBar />
      </Header>
      <Section>
          <TitleCont>
            <h2>Create your very own Gigapet</h2>
            <h3>Get your kids eating healthy today!</h3>
          </TitleCont>
          <ButtonContainer className='log-reg-btn'>
            <Links to="/login"><Buttons>Login</Buttons></Links>
            <Links to="/registeration"><Buttons>Register</Buttons></Links>
          </ButtonContainer>
      </Section>
    </Body>
  );
}
  
  export default HomePage;
  
  // function HomePage() {
  //   return (
  //     <Body>
  //       <Header>
  //         <div>
  //           <NavBar />
  //         </div>
  //         <HeaderInnerContainer className ='header-container'>
  //           <h1>
  //             Gigapet
  //           </h1>
  //           <Nav>
  //             <Link to="/login" style={{textDecoration: 'none'}}><Span>Login</Span></Link>
  //             <Link to="/registeration"style={{textDecoration: 'none'}}><Span>Register</Span></Link>
  //           </Nav>
  //         </HeaderInnerContainer>
  //       </Header>
  //       <Section>
  //           <div>
  //             <h2>Create your very own Gigapet</h2>
  //             <h3>Get your kids eating healthy today!</h3>
  //           </div>
  //           <ButtonContainer className='log-reg-btn'>
  //             <Links to="/login"><Buttons>Login</Buttons></Links>
  //             <Links to="/registeration"><Buttons>Register</Buttons></Links>
  //           </ButtonContainer>
  //       </Section>
        
        
       
  //     </Body>
  //   );
  // }