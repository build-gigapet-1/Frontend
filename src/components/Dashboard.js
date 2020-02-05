import React from 'react';
import NavBarDashboard from './NavBarDashboard';
import GigapetCard from './GigapetCard';

const Dashboard = props => {
    const onClick = e => {
        window.location.href='/creategigapet'
    }
    
    return (
        <div className='dashboard'>
            <NavBarDashboard />
            <GigapetCard />
            <button type='submit' onClick={onClick}>Create a new Gigapet</button>
        </div>
        
    )
}

export default Dashboard;