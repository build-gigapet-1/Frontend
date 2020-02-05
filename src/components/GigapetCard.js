import React, {useState, useEffect} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import avatar from '../images/Group 17.png';


const GigapetCard = (props) => {

    const feedMe = e => {
        window.location.href='/addmeal';
    }

    return (
        <div className='gigapetCard'>
        <Jumbotron>
            <img src={avatar} alt='gigapet'/>
            <h1 className="display-3">Hello, {props.petName}!</h1>
            <p className="lead">Let's see how your Gigapet is doing today...</p>
            <hr className="my-2" />
            <h4>Gigapet Score:</h4>
            <h4>100</h4>
            <hr className="my-2" />
            <p className="lead">
          < Button color="success" type='submit' onClick={feedMe}>Feed Me</Button>
            </p>
        </Jumbotron>
        </div>
    );
};

export default GigapetCard;