import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function HomePage() {
    return (
      <div>
        <NavBar />
        <div>
            <div>
              <h2>Create your own Gigapet</h2>
              <h3>Get your kids eating healthy today!</h3>
              <Link to="/login"><button>Login</button></Link>
              <br />
              <br />
              <Link to="/registeration"><button>Register</button></Link>
            </div>
        </div>
        
        
       
      </div>
    );
  }
  
  export default HomePage;
  