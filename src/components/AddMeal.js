import React, { useState } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import {useForm} from 'react-hook-form';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Navbar } from 'reactstrap';
import NavBarDashboard from './NavBarDashboard';
import '../App.css';
import Breakfast from '../images/breakfast.jpg';
import Lunch from '../images/lunch.jpg';

const AddMeal = props => {

    const [meal,setMeal] = useState({
        mealType: " ",
        mealContents:" "
    })
    const [mealContents,setMealContents] = useState({
        
        fruitsVeg: null,
        protein: null,
        grains: null,
        sweets: null,
        mealScore: null

    })
    const { register, handleSubmit, errors } = useForm(); 

    const handleChange = e => {
        setMeal({
            ...meal,
            [e.target.name]: e.target.value
        })
    }

    const addMeal = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/meals', meal)
            .then(res => {
                console.log(res.data);
            }).catch(err => console.log(err));
    }


    return(

        <div className="mealForm">
        <NavBarDashboard/>
        <Card body outline color ='secondary'>
            <h1 className='add-h1'> Add Meal</h1>
            <CardBody>
            <form onSubmit={handleSubmit(addMeal)} className="form">
                <CardTitle>Select the meal type</CardTitle>
                <div className="meal-img-container">
                    <img src={Breakfast} alt="Breakfast" />
                    <img src={Lunch} alt="Lunch" />
                    <img src='/images/lunch' alt="Dinner" />
                </div>
                <CardTitle>Servings of fruits and vegtables</CardTitle>
                <div className="input-wrap">
                    
                    <input 
                        name="fruitsVeg" 
                        ref={register({ required: true })} 
                        className="form-input"
                        value={mealContents.fruitsVeg} 
                        onChange={handleChange}
                        />
                </div>
                {errors.fruitsVeg && <p>Enter your fruit and vegtables servings.</p>}
                <CardTitle>Servings of protein</CardTitle>
                <div className="input-wrap">
                    <input 
                        name="protein" 
                        ref={register({ required: true })} 
                        className="form-input"
                        value={mealContents.protein} 
                        onChange={handleChange}
                        />
                </div>
                {errors.protein && <p>Enter your protein servings.</p>}
                <CardTitle>Servings of Grains</CardTitle>
                <div className="input-wrap">
                    <input 
                        name="grains" 
                        ref={register({ required: true })} 
                        className="form-input"
                        value={mealContents.grains} 
                        onChange={handleChange}
                        />
                </div>
                {errors.grains && <p>Enter your grain servings.</p>}
                <CardTitle>Servings of Sweets</CardTitle>
                <div className="input-wrap">
                    <input 
                        name="sweets"
                        ref={register({ required: true })}
                        className="form-input"
                        value={mealContents.sweets} 
                        onChange={handleChange}
                    />
                </div>
                {errors.sweets && <p>Enter your sweets servings.</p>}
                <Button color="success" type="submit" name="Add Meal">Add Meal</Button>
  
            </form>
            </CardBody>
        </Card>
        </div>

    )
}

export default AddMeal;