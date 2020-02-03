import React from 'react';
import NavBarDashboard from './NavBarDashboard';

const Dashboard = props => {
    
    return (
        <div className='dashboard'>
            <NavBarDashboard />
            <h2>My Dashboard</h2>
            <p>Gigapet will display here</p>
        </div>
        
    )
}

export default Dashboard;