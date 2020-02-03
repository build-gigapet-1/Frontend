import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useForm} from 'react-hook-form';

function Login() {
    const { register, handleSubmit, errors } = useForm(); 
    const history = useHistory();
    const onSubmit = data => {
        console.log(data)
        //history will be used in here
    }
    return (
      <div>
          <h1>Gigapet</h1>
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div>
                <input 
                  name="email" 
                  ref={register({ required: true })} 
                  className="form-input"
                  placeholder="Email"
                />
                <span/>
              </div>
              {errors.email && <p>You need a proper email to login!</p>}
                {/*
                  To Do: Add specific requirements for password
                */}
              <div>
              <input 
                name="password"
                type="password"
                ref={register({ required: true })}
                className="form-input"
                placeholder="Password"
              />
              </div>
              {errors.password && <p>You need a password to login!</p>}
              <button type="submit" name="Login">Login</button>
  
            </form>
            <br/>
            <Link to="/"><button>Go Back Home</button></Link>
          </div>
      </div>
      
    );
  }
  
  export default Login;