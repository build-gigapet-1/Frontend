import React, { useState } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import {useForm} from 'react-hook-form';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Navbar } from 'reactstrap';
import NavBarDashboard from './NavBarDashboard';
import '../App.css';
import './AddMeal.css'
import Breakfast from '../images/breakfast.jpg';
import Lunch from '../images/lunch.jpg';
import Dinner from '../images/dinner.jpg';

const AddMeal = props => {

    const [mealContents,setMealContents] = useState({
        mealType: null,
        fruitsVeg: null,
        protein: null,
        grains: null,
        sweets: null,
        mealScore: '8'

    })
    const { register, handleSubmit, errors } = useForm(); 

    const handleChange = e => {
        setMealContents({
            ...mealContents,
            [e.target.name]: e.target.value
        })
    }

    const addMeal = e => {
        //e.preventDefault();
        axiosWithAuth()
            .get('/api/pets/')
            .then(res => {
                console.log(res)
            }).catch(err => console.log(err));
      console.log(mealContents)
      /*axiosWithAuth()
            .post(`/api/pets/${}/meals`, mealContents)
            .then(res => {
                console.log(res.data);
            }).catch(err => console.log(err));*/

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
                <label>
                    <input 
                        type="radio" 
                        name="mealType" 
                        value="Breakfast"
                        onChange={handleChange} 
                        />
                    <img src={Breakfast} alt="Breakfast" />
                    <p>Breakfast</p>
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="mealType" 
                        value="Lunch"
                        onChange={handleChange} 
                        />
                    <img src={Lunch} alt="Lunch" />
                    <p>Lunch</p>
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="mealType" 
                        value="Dinner"
                        onChange={handleChange} 
                        />
                    <img src={Dinner} alt="Dinner" />
                    <p>Dinner</p>
                </label>
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