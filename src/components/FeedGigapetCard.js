import React, {useState, useEffect} from 'react';
import {Button } from 'reactstrap';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import axiosWithAuth from '../utils/AxiosWithAuth';


const FeedGigapetCard = (props) => {
    const [gigapet,setGigapet] =useState({
        petName: props.value.petName,
        petScore: props.value.petScore,
        petImgSet: props.value.petImgSet
    
      })
    const feedMe = e => {
        axiosWithAuth()
          .put('/pets/', gigapet)
          .then(res=>{
                console.log(res)
          }
          ).catch(err => console.log(err))
        window.location.href='/addmeal';
    }
    
    console.log('gigapet ',gigapet)


    return (
        <div className='mealCard'>
       <Card body outline color ='secondary'>
            <CardHeader>{props.value.date}</CardHeader>
            <CardBody>
            <CardTitle>Meal Type: {props.value.date}</CardTitle>
                <CardText>Fruits & Veggies: {props.value.fruitsVeg} servings:</CardText>
                <CardText>Protein: {props.value.protein} servings</CardText>
                <CardText>Grains: {props.value.grains} servings</CardText>
                <CardText>Sweets: {props.value.sweets} servings</CardText>
                <Button className='cardBtn' color="success">Eat Meal</Button>
            </CardBody>
            <CardFooter>Meal Score: {props.value.mealScore}</CardFooter>
        </Card>
    </div>
    );
};

export default FeedGigapetCard;