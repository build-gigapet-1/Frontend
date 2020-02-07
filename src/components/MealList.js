import React, {useState, useEffect} from 'react';
import MealCard from './MealCard';
import NavBarDashboard from './NavBarDashboard';
// import { Container, Row } from "reactstrap";
// import styled from "styled-components";
import axiosWithAuth from '../utils/AxiosWithAuth'


const MealList = props => {
    const [meals, setMeals] = useState([]);
    const [pets,setPets] = useState([])
    const [petsId, setPetsId] = useState([])
    
    useEffect(() =>{
        axiosWithAuth()
                .get('/pets/')
                .then(res => {
                    setPets(res.data);
        })
        .catch(err => console.log('Cannot fetch pets', err))
    }, []);

    const getMeals= e => {
        // setPetsId(e.target.value)
        
        axiosWithAuth()
            .get(`/pets/${e.target.value}`)
            .then(res => {
            console.log(res);
            console.log('my pet id', res.data.petId)
            setPetsId(res.data.petId)
            console.log('pet id', petsId)
            setMeals(res.data.meals);
        }).catch(error => {
            console.log('no meal found', error);
        })
    }

    const filterMeals = e => {
        console.log(meals, e.target.value)
        const newMeals = meals.filter(meal => `${meal.mealType}` === e.target.value);
        console.log(newMeals)
        if (newMeals) {
            setMeals(newMeals)
        }
    }

    

    return (
        <div className="mealList">
            <NavBarDashboard />
            <div className='mealsContainer'>
                <div className='sortColumn'>
                    <h3>Filter meals</h3>
                    <select name='mealType' onChange={filterMeals}>
                        <option>Meal Type</option>
                        <option value='Breakfast'>Breakfast</option>
                        <option value='Lunch'>Lunch</option>
                        <option value='Dinner'>Dinner</option>
                    </select>
                </div>
                <div className='mealsColumn'>
                    <h2>Which gigapets meals do you want to view?</h2>
                    <select name="petId" onChange={getMeals}>
                        <option>Select Pet</option>
                        { pets.map(pet => (
                        <option name="petId" value={pet.petId}> {pet.petName} </option>
                        ))}
                    </select>
                    <h2 className='myMeals'>My Meals</h2>
                    <div className="mealCards">
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
        </div>
    )
}

export default MealList;