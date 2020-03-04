import React, {useState, useEffect} from 'react';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from '../utils/AxiosWithAuth';

// image imports
import deer from '../images/deer.png';
import gorilla from '../images/gorilla.png';
import shark from '../images/hammerhead.png';
import parrot from '../images/parrot.png';
import snake from '../images/snekk.png';
import crocodile from '../images/omgomg.png';


const GigapetCard = (props) => {
    const initialPet = {
        petName: null,
        petScore: '0',
        petImgSet: null
    }

    const [pet, setPet] = useState(initialPet)

    const {className} = props;

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

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

    useEffect(() => {
        const petToEdit = props
        if (petToEdit) {
            setPet(petToEdit)
        }
    }, [props])

    const changeHandler = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });

    }

    // edit meal function with axios.put
    const editPet = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/pets/${props.petId}`, pet)
        .then(res => {
            console.log('updated data', res)
            window.location.reload()
        })
        .catch(err => console.log('Cannot update', err))
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
            <Button className='smallBtn' color="info" size="sm" onClick={toggle}>Edit Gigapet</Button>{' '}
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Edit Meal</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={editPet}>
                            <Label for="mealType">Meal Type</Label>
                            <Input type="select" name="petImgSet" id="petImgSet" onChange={changeHandler}>
                                <option value={props.petImgSet}>{props.petImgSet}</option>
                                <option value='Crocodile'>Crocodile</option>
                                <option value='Deer'>Deer</option>
                                <option value='Gorilla'>Gorilla</option>
                                <option value='Parrot'>Parrot</option>
                                <option value='Shark'>Shark</option>
                                <option value='Snake'>Snake</option>
                            </Input>
                            <FormGroup>
                                <Label for="petName">Pet Name</Label>
                                <Input type="text" name="petName" id="petName" onChange={changeHandler} value={props.petName}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="petScore">Pet Score</Label>
                                <Input disabled type="text" name="petScore" id="petScore" onChange={changeHandler} value={props.petScore}/>
                            </FormGroup>
                            <Button color="primary" onClick={editPet}>Update</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </Form>
                </ModalBody>
            </Modal>
                    
            <Button className='smallBtn' color="danger" size="sm" onClick={deletePet}>Delete Gigapet</Button>
        </Jumbotron>
        </div>
    );
};

export default GigapetCard;