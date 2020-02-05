import React, {useState}  from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import styled from "styled-components";
import axiosWithAuth from '../utils/AxiosWithAuth';
import logo from '../images/logo.png';

//==============================Styled Components===========================
let Header = styled.header`
height: 120px;
background: #6C46A2;
display: flex;
`;

let HeaderInnerContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
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
text-decoration: none;
width: 50%;
`;

function Login() {
    const { register, errors } = useForm(); 
    const history = useHistory();
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
      setUserInfo({...userInfo,
        [e.target.name]: e.target.value
      
      })}


    const login = e => {

        e.preventDefault();
        console.log(userInfo);
        axiosWithAuth()
              .post('/auth/login/', userInfo)
              .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                history.push('/dashboard')

              })
        
    }
    return (
      <div>
        <Header>
          <HeaderInnerContainer className ='header-container'>
              <a href='https://kkslider2130.github.io/Gigapet-Marketing-proto/#'><img src={logo} alt='logo'/></a>
            <Nav>
              <Link to="/login" style={{textDecoration: 'none'}}><Span>Login</Span></Link>
              <Link to="/registration"style={{textDecoration: 'none'}}><Span>Register</Span></Link>
            </Nav>
          </HeaderInnerContainer>
        </Header>
          <div>
            <br/>
            <h1>Login</h1>
            <br/>
            <Form onSubmit={login} className="form">
              <div>
                <Input
                  name="username" 
                  ref={register({ required: true })} 
                  placeholder="User Name"
                  value={userInfo.username}
                  onChange={handleChange}
                />
                <span/>
              </div>
              {errors.username && <p>You need a proper User Name to login!</p>}
                {/*
                  To Do: Add specific requirements for password
                */}
              <div>
              <Input
                name="password"
                type="password"
                ref={register({ required: true })}
                placeholder="Password"
                value={userInfo.password}
                onChange={handleChange}
              />
              </div>
              {errors.password && <p>You need a password to login!</p>}
              <Buttons type="submit" name="Login">Login</Buttons>
  
            </Form>
            <br/>
            <ButtonContainer>
              <Links to="/" style={{textDecoration: 'none'}}><Buttons2>Go Back Home</Buttons2></Links>
            </ButtonContainer>
          </div>
      </div>
      
    );
  }
  
  export default Login;