import React, {useState} from 'react';
import MealCard from './MealCard';
import NavBarDashboard from './NavBarDashboard';

const MealList = props => {
    const [meals, setMeals] = useState([]);

    // useEffect with axios call to get meal data

    return (
        <div className="mealList">
            <NavBarDashboard />
            <h2>My Meals</h2>
            {/* map over meals to render meal cards */}
            <MealCard />
        </div>

        
    )
}

export default MealList;