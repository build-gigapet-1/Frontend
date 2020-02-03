import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useForm} from 'react-hook-form';

function Registration() {
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

            <h2>Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div>
                    <input 
                        name="first_name" 
                        ref={register({ required: true })} 
                        className="form-input"
                        placeholder="First Name"
                        />
                </div>
                {errors.first_name && <p>Enter your first name.</p>}
                <div>
                    <input 
                        name="last_name" 
                        ref={register({ required: true })} 
                        className="form-input"
                        placeholder="Last Name"
                        />
                </div>
                {errors.last_name && <p>Enter your last name.</p>}
                <div>
                    <input 
                    name="email" 
                    ref={register({ required: true })} 
                    className="form-input"
                    placeholder="Email"
                    />
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
                <button type="submit" name="Login">Register</button>
  
            </form>
            <br/>
            <Link to="/"><button>Go Back Home</button></Link>
          </div>
      </div>
      
    );
  }
  
  export default Registration;