import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import {useForm} from 'react-hook-form';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Navbar } from 'reactstrap';
import NavBarDashboard from './NavBarDashboard';
import '../App.css';
import './AddMeal.css'
import Breakfast from '../images/breakfast1.png';
import Lunch from '../images/lunch1.png';
import Dinner from '../images/dinner1.png';
import styled from 'styled-components';
import bg from '../images/homepage/addmeal.png';
import bg2 from '../images/homepage/loginregistercopy.png';
import formbg from '../images/homepage/formbg.png';

// ****************** Styled Components ****************
let Body = styled(Card)`
background-image: url(${bg});
background-size: cover;
border: none;
@media ( max-width: 760px) {
/* background-image: url(${bg2}); */
background-image: none;
}
`;

let InputContainer = styled.div`
background-image: url(${formbg});
display: flex;
flex-direction: column;
align-items: center;
height: 30vh;
width: 35%;
padding: 2% 0;

@media (min-width: 1500px) {
max-width: 600px;
max-height: 551px;
width: 453px;
height: 416px;
}

@media ( max-width: 760px ) {
width: 100%;
}
`;

let CardTitle2 = styled.div`
@media ( max-width: 760px ) {
    display: none;
}
`;

let CardTitle3 = styled.div`
display: none;
@media ( max-width: 760px ) {
    display: inline-block;
}
`;

let Label = styled.label`
@media ( max-width: 1420px ) {
    margin: 0;
    width: 15%;
}

@media ( max-width: 760px){
    width: 80%;
}

`;

let NewCardTitle = styled(CardTitle)`
margin: 0;
padding: .5rem 0;
`;
// *************************************************************

const AddMeal = props => {
    const [pets,setPets] = useState([])
    const [mealContents,setMealContents] = useState({
        petId: null,
        mealType: null,
        fruitsVeg: null,
        protein: null,
        grains: null,
        sweets: null,
        mealScore: '8'

    })
    const { register, handleSubmit, errors } = useForm(); 

    //recommended servings for 4-8 year olds. Each serving is a half a cup
    const recommendedServings = {
        
    }

    useEffect(() => {
        axiosWithAuth()
            .get('/pets/')
            .then(res => {
                setPets(res.data);
                console.log(res.data[0].petId)
     })
     .catch(err => console.log('Cannot fetch pets', err))

    }, [])

    const handleChange = e => {
        setMealContents({
            ...mealContents,
            [e.target.name]: e.target.value
        })
    }
    const addMeal = e => {

      axiosWithAuth()
            .post(`/pets/${mealContents.petId}/meals`, mealContents)
            .then(res => {
                console.log(res)
                window.location.href='/dashboard'
            }).catch(err => console.log(err));
            
      
     }

     //Add a calculate meal score function

    return(

        <div className="mealForm">
        <NavBarDashboard/>
            <Body>
                <CardBody>
                    <h1 className='add-h1'> Add a Meal</h1>
                    <form onSubmit={handleSubmit(addMeal)} className="form">

                    <CardTitle2>Which gigapet do you want to add a meal for?</CardTitle2>
                    <CardTitle3>Select gigapet:</CardTitle3>
                    <select name="petId" onChange={handleChange}>
                        <option>Select Pet</option>
                    { pets.map(pet => (
                        <option name="petId" value={pet.petId}> {pet.petName} </option>
                    ))}
                    </select>
                    <CardTitle>Select the meal type</CardTitle>
                    <div className="meal-img-container">
                    <Label className='labels'>
                        <input 
                            type="radio" 
                            name="mealType" 
                            value="Breakfast"
                            onChange={handleChange} 
                            />
                        <img className='addMealImage' src={Breakfast} alt="Breakfast" />
                        <p>Breakfast</p>
                    </Label>
                    <Label className='labels'>
                        <input 
                            type="radio" 
                            name="mealType" 
                            value="Lunch"
                            onChange={handleChange} 
                            />
                        <img className='addMealImage' src={Lunch} alt="Lunch" />
                        <p>Lunch</p>
                    </Label>
                    <Label className='labels'>
                        <input 
                            type="radio" 
                            name="mealType" 
                            value="Dinner"
                            onChange={handleChange} 
                            />
                        <img className='addMealImage' src={Dinner} alt="Dinner" />
                        <p>Dinner</p>
                    </Label>
                    </div>
                    <InputContainer className='text-input-cont'>
                    <NewCardTitle>Servings of fruits and vegtables</NewCardTitle>
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
                        <NewCardTitle>Servings of protein</NewCardTitle>
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
                        <NewCardTitle>Servings of Grains</NewCardTitle>
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
                        <NewCardTitle>Servings of Sweets</NewCardTitle>
                        <div className="input-wrap">
                            <input 
                                name="sweets"
                                ref={register({ required: true })}
                                className="form-input"
                                value={mealContents.sweets} 
                                onChange={handleChange}
                            />
                        </div>
                    </InputContainer>
                    {errors.sweets && <p>Enter your sweets servings.</p>}
                    <Button style={{marginTop: '1rem'}} color="success" type="submit" name="Add Meal">Add Meal</Button>
    
                    </form>
                </CardBody>
            </Body>
        </div>

    )
}

export default AddMeal;