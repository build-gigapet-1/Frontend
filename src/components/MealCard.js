import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

const MealCard = props => {
    // delete meal function with axios.delete

    return (
        <div className='mealCard'>
            <Card body outline color ='secondary'>
                <CardHeader>Date</CardHeader>
                <CardBody>
                    <CardTitle>Meal Type</CardTitle>
                    <CardText>Fruits & Veggies: # servings</CardText>
                    <CardText>Protein: # servings</CardText>
                    <CardText>Grains: # servings</CardText>
                    <CardText>Sweets: # servings</CardText>
                    <Button className='cardBtn'>Edit</Button>
                    <Button className='cardBtn'>Delete</Button>
                </CardBody>
                <CardFooter>Meal Score</CardFooter>
            </Card>
        </div>
    )
}

export default MealCard;