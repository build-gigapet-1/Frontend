import React, {useState} from 'react';
import MealCard from './MealCard';
import NavBarDashboard from './NavBarDashboard';

const MealList = props => {
    const [meals, setMeals] = useState([]);

    return (
        <div className="mealList">
            <NavBarDashboard />
            <h2>My Meals</h2>
            <MealCard />
        </div>

        
    )
}

export default MealList;