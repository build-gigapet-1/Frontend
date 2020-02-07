import React, {useState, useEffect} from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from '../utils/AxiosWithAuth';


const FeedGigapetCard = (props) => {

    const data = props.data
    const petName = 'petName'
    const petScore = 'petScore'
    const petImgSet = 'petImgSet'
    const [gigapet,setGigapet] = useState({
        petName: '',
        petScore: '',
        petImgSet: ''

    })
    // Modal
    const {
        buttonLabel,
        className
      } = props;

    
    const [modal, setModal] = useState(false);

    
    const toggle = () => setModal(!modal);

    const feedMe = e => {
        console.log(e.target.name)
        setGigapet({...gigapet,
                        [petName]: e.target.name,
                        [petScore]: e.target.value,
                        [petImgSet]: e.target.id})
        
        console.log(data)
        
        toggle();
        console.log(gigapet)
        
    }

    const handleFeed = () =>{

        console.log(gigapet)
    }


    return (
        <div className='mealCard'>
       <Card body outline color ='secondary'>
            <CardHeader>{props.value.date}</CardHeader>
            <CardBody>
            <CardTitle>Meal Type: {props.value.mealType}</CardTitle>
                <CardText>Fruits & Veggies: {props.value.fruitsVeg} servings:</CardText>
                <CardText>Protein: {props.value.protein} servings</CardText>
                <CardText>Grains: {props.value.grains} servings</CardText>
                <CardText>Sweets: {props.value.sweets} servings</CardText>
                <Button onClick={feedMe} className='cardBtn' color="success" name={props.data.petName} value={props.data.petScore} id={props.data.petImgSet} >Eat Meal</Button>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>Are you sure you want to eat this meal?</ModalHeader>
                        <ModalBody>
                            <CardText></CardText>
                            <Button color="success" onClick={handleFeed}>Eat Meal</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalBody>
                    </Modal>
            </CardBody>
            <CardFooter>Meal Score: {props.value.mealScore}</CardFooter>
        </Card>
    </div>
    );
};

export default FeedGigapetCard;