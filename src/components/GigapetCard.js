import React, {useState, useEffect} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import axiosWithAuth from '../utils/AxiosWithAuth';

// image imports
import deer from '../images/deer.png';
import gorilla from '../images/gorilla.png';
import shark from '../images/hammerhead.png';
import parrot from '../images/parrot.png';
import snake from '../images/snekk.png';
import crocodile from '../images/omgomg.png';


const GigapetCard = (props) => {
    const feedMe = e => {
        console.log(props)
        window.location.href=`/feedgigapet/${e.target.value}`;
    }

    const gigapetImg = () => {
         if (props.petImgSet === 'Gorilla') {
            return <img src={gorilla} alt='gorilla' />
        } if (props.petImgSet === 'Deer') {
            return <img src={deer} alt='deer' />
        } if (props.petImgSet === 'Shark') {
            return <img src={shark} alt='shark' />
        } if (props.petImgSet === 'Parrot') {
            return <img src={parrot} alt='parrot' />
        } if (props.petImgSet === 'Snake') {
            return <img src={snake} alt='snake' />
        } if (props.petImgSet === 'Crocodile') {
            return <img src={crocodile} alt='crocodile' />
        }
    }

    const deletePet = e => {
        axiosWithAuth()
        .delete(`/pets/${props.petId}`)
        .then(res => {
            window.location.reload()
        })
        .catch(err => console.log('Cannot delete', err))
    }

    return (
        <div className='gigapetCard'>
        <Jumbotron>
            {gigapetImg()}
            <h1 className="display-3">Hello, {props.petName}!</h1>
            <p className="lead">Let's see how your Gigapet is doing today...</p>
            <hr className="my-2" />
            <h4>Gigapet Score:</h4>
            <h4>{props.petScore}</h4>
            <hr className="my-2" />
            <p className="lead">
                <Button color="success"  value={props.petId} type='submit' onClick={feedMe}>Feed Me</Button>
            </p>
            <Button className='smallBtn' color="info" size="sm">Edit Gigapet</Button>{' '}
            <Button className='smallBtn' color="danger" size="sm" onClick={deletePet}>Delete Gigapet</Button>
        </Jumbotron>
        </div>
    );
};

export default GigapetCard;