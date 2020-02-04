import React from 'react';
import NavBarDashboard from './NavBarDashboard';
import GigapetCard from './GigapetCard';

const Dashboard = props => {
    
    return (
        <div className='dashboard'>
            <NavBarDashboard />
            <GigapetCard />
        </div>
        
    )
}

export default Dashboard;