import React, {useState, useEffect} from 'react';
import MealCard from './MealCard';
import NavBarDashboard from './NavBarDashboard';
import axios from 'axios';
import { Container, Row } from "reactstrap";
import styled from "styled-components";


const MealList = props => {
    const [meals, setMeals] = useState([]);

    useEffect(() =>{
        axios
            .get('https://gigapet-1.herokuapp.com/api/pets/')
            .then(res => {
                console.log(res);
                setMeals(res.data.meals);
            })
            .catch(error => {
                console.log('no meal found', error);
            })
    }, []);
    
    // useEffect with axios call to get meal data

    return (
        <div className="mealList">
            <NavBarDashboard />
            <h2>My Meals</h2>
            {/* map over meals to render meal cards */}
            <div className="mealList">
            <NavBarDashboard />
            <h2>My Meals</h2>
            {/* map over meals to render meal cards */}
            {/* <div>
                {meals.map(meal => {
                    <MealCard 
                    key = {mealId}
                    mealType = {meal.mealType}
                    fruitsVeg = {meal.fruitsVeg}
                    protein = {meal.protein}
                    grains = {meal.grains}
                    sweets = {meal.sweets}
                    mealscore = {meal.mealscore}
                    />
                })}
            </div> */}
        </div>
        </div>

        
    )
}

export default MealList;