import React, {useState} from 'react';
import MealCard from './MealCard';

const Dashboard = props => {
    const [meals, setMeals] = useState([]);

    return (
        <div>
            <h2>Dashboard will go here</h2>
            {meals.map(meal => (
                <MealCard
                 key={meal.id}
                 
                />
            ))}
        </div>
        
    )
}

export default Dashboard;