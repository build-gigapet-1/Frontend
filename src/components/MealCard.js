import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import axiosWithAuth from '../utils/AxiosWithAuth';

const MealCard = props => {
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
                <CardHeader>Date</CardHeader>
                <CardBody>
                <CardTitle>Meal Type: {props.mealType}</CardTitle>
                    <CardText>Fruits & Veggies: {props.fruistVeg} servings:</CardText>
                    <CardText>Protein: {props.protein} servings</CardText>
                    <CardText>Grains: {props.grains} servings</CardText>
                    <CardText>Sweets: {props.sweets} servings</CardText>
                    <Button className='cardBtn'>Edit</Button>
                    <Button className='cardBtn'>Delete</Button>
                </CardBody>
                <CardFooter>Meal Score: {props.mealScore}</CardFooter>
            </Card>
        </div>
    )
}

export default MealCard;