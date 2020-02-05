import React from 'react';
import { Button } from 'reactstrap';
import NavBarDashboard from './NavBarDashboard';
import GigapetCard from './GigapetCard';

const Dashboard = props => {
    const onClick = e => {
        window.location.href='/creategigapet'
    }
    
    return (
        <div className='dashboard'>
            <NavBarDashboard />
            <Button className='addPetBtn' onClick={onClick} color="success">Add a new Gigapet</Button>
            <GigapetCard />
        </div>
        
    )
}

export default Dashboard;