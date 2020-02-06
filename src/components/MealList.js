import React, {useState, useEffect} from 'react';
import MealCard from './MealCard';
import NavBarDashboard from './NavBarDashboard';
// import { Container, Row } from "reactstrap";
// import styled from "styled-components";
import axiosWithAuth from '../utils/AxiosWithAuth'


const MealList = props => {
    const [meals, setMeals] = useState([]);
    const [userId, setUserId] = useState('')
    useEffect(() =>{

        // console.log(props)
        let id = 0;
        // axiosWithAuth()
        //     .get(`/pets/`)
        //     .then(res => {
        //         console.log(res);
        //         setUserId(res.data[0].userId);
        //         console.log(res.data[0].userId);
        //         id = res.data[0].userId;

        //     })
        //     .catch(error => {
        //         console.log('no meal found', error);
        //     })
      
            axiosWithAuth()
            .get(`/pets/1/meals`)
            .then(res => {
            console.log('second axios call', res);
            setMeals(res.data.meals);
        }).catch(error => {
            console.log('no meal found', error);
        })

    }, []);
    

    return (
        <div className="mealList">
            <NavBarDashboard />
            <h2>My Meals</h2>
            <div className="mealList">
            <div>
                {/* {meals.map(meal => (
                    <MealCard 
                    key = {meal.mealId}
                    mealType = {meal.mealType}
                    fruitsVeg = {meal.fruitsVeg}
                    protein = {meal.protein}
                    grains = {meal.grains}
                    sweets = {meal.sweets}
                    mealScore = {meal.mealScore}
                    />
                ))} */}
            </div>
        </div>
        </div>

        
    )
}

export default MealList;