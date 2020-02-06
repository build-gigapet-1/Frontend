import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from '../utils/AxiosWithAuth';

const MealCard = props => {
    // Modal
    const {
        buttonLabel,
        className
      } = props;
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
    // meal state
    const initialMeal = {
        fruitsVeg: null,
        protein: null,
        grains: null,
        sweets: null,
    }

    const [meal, setMeal] = useState(initialMeal);
    const {id} = useParams();

    const changeHandler = e => {
        setMeal({
            ...meal,
            [e.target.name]: e.target.value
        });

    }

    // edit meal function with axios.put
    const editMeal = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(``, meal)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log('Cannot update', err))
    }

    // delete meal function with axios.delete

    const deleteMeal = meal => {
        axiosWithAuth()
        .delete(``)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log('Cannot delete', err))
    }
    
    return (
        <div className='mealCard'>
            <Card body outline color ='secondary'>
                <CardHeader>Date</CardHeader>
                <CardBody>
                <CardTitle>Meal Type: {props.mealType}</CardTitle>
                    <CardText>Fruits & Veggies: {props.fruitsVeg} servings:</CardText>
                    <CardText>Protein: {props.protein} servings</CardText>
                    <CardText>Grains: {props.grains} servings</CardText>
                    <CardText>Sweets: {props.sweets} servings</CardText>
                    <Button className='cardBtn' color="success" onClick={toggle}>Edit</Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>Edit Meal</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={editMeal}>
                            <FormGroup>
                                <Label for="fruitsVeg">Fruits & Veggies</Label>
                                <Input type="text" name="fruitsVeg" id="fruitsVeg" placeholder="# of Servings" onChange={changeHandler} value={meal.fruitsVeg}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="protein">Protein</Label>
                                <Input type="text" name="protein" id="protein" placeholder="# of Servings" onChange={changeHandler}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="grains">Password</Label>
                                <Input type="text" name="grains" id="grains" placeholder="# of Servings" onChange={changeHandler}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="sweets">Password</Label>
                                <Input type="text" name="sweets" id="sweets" placeholder="# of Servings" onChange={changeHandler}/>
                            </FormGroup>
                            <Button color="primary" onClick={toggle}>Update</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </Form>
                        </ModalBody>
                    </Modal>
                    <Button className='cardBtn'>Delete</Button>
                </CardBody>
                <CardFooter>Meal Score: {props.mealScore}</CardFooter>
            </Card>
        </div>
    )
}

export default MealCard;