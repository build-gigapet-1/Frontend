import React, {useState, useEffect} from 'react';
import MealCard from './MealCard';
import NavBarDashboard from './NavBarDashboard';
// import { Container, Row } from "reactstrap";
// import styled from "styled-components";
import axiosWithAuth from '../utils/AxiosWithAuth'


const MealList = props => {
    const [meals, setMeals] = useState([]);
    const [pets,setPets] = useState([])
    useEffect(() =>{

        axiosWithAuth()
                .get('/pets/')
                .then(res => {
                    setPets(res.data);

        })
        .catch(err => console.log('Cannot fetch pets', err))
      
       
    }, []);

    const getMeals= e => {

        console.log(e.target.value)
        axiosWithAuth()
            .get(`/pets/${e.target.value}`)
            .then(res => {
            console.log(res);
            setMeals(res.data.meals);
        }).catch(error => {
            console.log('no meal found', error);
        })


    }
    

    return (
        <div className="mealList">
            <NavBarDashboard />
            <h2>Which gigapets meals do you want to view?</h2>
                <select name="petId" onChange={getMeals}>
                    <option>Select Pet</option>
                { pets.map(pet => (
                    <option name="petId" value={pet.petId}> {pet.petName} </option>
                ))}
                </select>
            <h2>My Meals</h2>
            <div className="mealList">
            <div>
                {meals.map(meal => (
                    <MealCard 
                    mealId = {meal.mealId}
                    date = {meal.date}
                    mealType = {meal.mealType}
                    fruitsVeg = {meal.fruitsVeg}
                    protein = {meal.protein}
                    grains = {meal.grains}
                    sweets = {meal.sweets}
                    mealScore = {meal.mealScore}
                    petId = {meal.petId}
                    />
                )) }
            </div>
        </div>
        </div>

        
    )
}

export default MealList;