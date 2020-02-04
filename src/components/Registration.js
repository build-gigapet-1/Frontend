import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import styled from "styled-components"
import axiosWithAuth from '../utils/AxiosWithAuth';

//==============================Styled Components===========================
let Header = styled.header`
height: 120px;
background: #6C46A2;
display: flex;
`;

let HeaderInnerContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 auto;
max-width: 1440px;
width: 100%;
color: white;
`;

let Span = styled.span`
color: white;
font-size: 1.4rem;
font-family: Hind Madurai;
text-decoration: none;
`;

let Nav = styled.nav`
width: 20%;
display: flex;
justify-content: space-between;
`;

let Input = styled.input`
/* background: red; */
/* border-radius: 25px; */
font-size: 1.7rem;
padding: 10px 30px;
border: 2px solid black;
margin: 1%;
&:hover, :focus{
  border: 2px solid rgba(201, 76, 76, 0.5);
  outline: none;
}
`;

let Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

let Buttons = styled.button`
width: 20%;
background: #6C46A2;
color: white;
font-size: 1.5rem;
margin: 1% 0;
display: flex;
flex-direction: column;
align-items: center;
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

function Registration() {
    const { register, handleSubmit, errors } = useForm(); 
    const history = useHistory();
    const onSubmit = data => {
        console.log(data)
        axiosWithAuth()
              .post("/auth/register/", data)
              .then(res => {
                  console.log(res.data)
                  history.push("/login")

              } )
    }
  
    return (
      <div>
        <Header>
          <HeaderInnerContainer className ='header-container'>
            <h1>
              Gigapet
            </h1>
            <Nav>
              <Link to="/login" style={{textDecoration: 'none'}}><Span>Login</Span></Link>
              <Link to="/registeration"style={{textDecoration: 'none'}}><Span>Register</Span></Link>
            </Nav>
          </HeaderInnerContainer>
        </Header>
          <div>

            <h2>Registration</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className="form">
                <div>
                    <Input 
                        name="userName" 
                        ref={register({ required: true })} 
                        className="form-input"
                        placeholder="User Name"
                        />
                </div>
                {errors.userName && <p>Enter your user name.</p>}
                <div>
                    <Input 
                        name="phone" 
                        ref={register({ required: true })} 
                        className="form-input"
                        placeholder="Phone Number"
                        />
                </div>
                {errors.phone && <p>Enter your phone number.</p>}
                {/*
                  To Do: Add specific requirements for password
                */}
                <div>
                <Input 
                    name="password"
                    type="password"
                    ref={register({ required: true })}
                    className="form-input"
                    placeholder="Password"
                />
                </div>
                {errors.password && <p>You need a password to register!</p>}
                <Buttons type="submit" name="Register">Register</Buttons>
  
            </Form>
            <br/>
            <Links to="/"><Buttons>Go Back Home</Buttons></Links>
          </div>
      </div>
      
    );
  }
  
  export default Registration;