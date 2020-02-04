import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {useForm} from 'react-hook-form';

const AddMeal = props => {
    const [meal,setMeal] = useState({
        date: null,
        fruitsVeg: "0",
        protein: "0",
        grains: "0",
        sweets: "0",
        mealScore: "0"

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
            .post('/api/meals', {date: Date.now(), ...meal})
            .then(res => {
                console.log(res.data);
            }).catch(err => console.log(err));
    }


    return(

        <div>
            <h2>Add Meal</h2>
            <form onSubmit={handleSubmit(addMeal)} className="form">
                <div>
                    <input 
                        name="fruitsVeg" 
                        ref={register({ required: true })} 
                        className="form-input"
                        placeholder="Fruits & Vegtables"
                        value={meal.fruitsVeg} 
                        onChange={handleChange}
                        />
                </div>
                {errors.fruitsVeg && <p>Enter your fruit and vegtables servings.</p>}
                <div>
                    <input 
                        name="protein" 
                        ref={register({ required: true })} 
                        className="form-input"
                        placeholder="Protien"
                        value={meal.protein} 
                        onChange={handleChange}
                        />
                </div>
                {errors.protein && <p>Enter your protein servings.</p>}
                <div>
                    <input 
                        name="grains" 
                        ref={register({ required: true })} 
                        className="form-input"
                        placeholder="Grains"
                        value={meal.grains} 
                        onChange={handleChange}
                        />
                </div>
                {errors.grains && <p>Enter your grain servings.</p>}
                <div>
                    <input 
                        name="sweets"
                        ref={register({ required: true })}
                        className="form-input"
                        placeholder="Sweets"
                        value={meal.sweets} 
                        onChange={handleChange}
                    />
                </div>
                {errors.sweets && <p>Enter your sweets servings.</p>}
                <button type="submit" name="Add Meal">Add Meal</button>
  
            </form>
        </div>

    )



}


export default AddMeal;