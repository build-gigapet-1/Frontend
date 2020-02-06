import React, {useState} from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from '../utils/AxiosWithAuth';

const MealCard = props => {
    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    // edit meal function with axios.put
    const editMeal = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(``)
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
                <CardHeader>{props.date}</CardHeader>
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
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Update</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                    <Button className='cardBtn'>Delete</Button>
                </CardBody>
                <CardFooter>Meal Score: {props.mealScore}</CardFooter>
            </Card>
        </div>
    )
}

export default MealCard;