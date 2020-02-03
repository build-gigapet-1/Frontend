import React, {useState} from 'react';
import MealCard from './MealCard';

const MealList = props => {
    const [meals, setMeals] = useState([]);

    return (
        <div className="mealList">
            <MealCard />
        </div>

        
    )
}

export default MealList;