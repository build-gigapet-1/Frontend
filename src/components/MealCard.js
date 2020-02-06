import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

const MealCard = props => {
    // delete meal function with axios.delete
console.log(props)
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