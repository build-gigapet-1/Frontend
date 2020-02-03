import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

const MealCard = props => {
    return (
        <div className='mealCard'>
            <Card body outline color ='secondary'>
                <CardHeader>Date</CardHeader>
                <CardBody>
                    <CardTitle>Meal Type</CardTitle>
                    <CardText>Fruits & Veggies: </CardText>
                    <CardText>Protein: </CardText>
                    <CardText>Grains: </CardText>
                    <CardText>Sweets: </CardText>
                    <Button className='cardBtn editBtn'>Edit</Button>
                    <Button className='cardBtn deleteBtn'>Delete</Button>
                </CardBody>
                <CardFooter>Meal Score</CardFooter>
            </Card>
        </div>
    )
}

export default MealCard;