import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import styled from "styled-components"
import axiosWithAuth from '../utils/AxiosWithAuth';
import NavBar from "./NavBar";
import loginbg from '../images/homepage/loginregistercopy.png'

//==============================Styled Components===========================
let Header = styled.header`
/* height: 120px; */
background: #6C46A2;
`;

let MainBody = styled.div`
height: 100vh;
`;

let Body = styled.div`
background-image: url(${loginbg});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 91.8%;
/* height: inherit; */
`;

let Input = styled.input`
background: white;
/* border-radius: 25px; */
width: 100%;
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
font-size: 1.3rem;
font-family: 'Patua One';
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

let Buttons2 = styled.button`
width: 100%;
background: #6C46A2;
color: white;
font-size: 1.3rem;
font-family: 'Patua One';
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

let ButtonContainer = styled.div`
width: 40%;
margin: 0;
display: flex;
flex-direction: column;
justify-items: center;
justify-content: center;
align-self: center;
align-items: center;
align-content: center;
margin: 0 auto;
`;

let Links = styled(Link)`
width: 50%;
text-decoration: none;
`;

// ************************ Styled Components End ***************************


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
      <MainBody className='main-body'>
        <Header>
          <NavBar/>
        </Header>
          <Body>
          <br/>
            <h1>Registration</h1>
          <br/>
            <Form onSubmit={handleSubmit(onSubmit)} className="form">
                <div>
                    <Input 
                        name="username" 
                        ref={register({ required: true })} 
                        className="form-input"
                        placeholder="User Name"
                        />
                </div>
                {errors.username && <p>Enter your user name.</p>}
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
            <ButtonContainer>
              <Links to="/" style={{textDecoration: 'none'}}><Buttons2>Go Back Home</Buttons2></Links>
            </ButtonContainer>
          </Body>
      </MainBody>
      
    );
  }
  
  export default Registration;