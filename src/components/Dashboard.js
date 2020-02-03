import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../logo.png';

const Dashboard = props => {
    
    return (
        <div className='dashboard'>
            <Nav className='dashNav'>
                <img src={logo}/>
                <div className='links'>
                    <NavItem>
                        <NavLink href="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Add Meal</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/meals">View Meals</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About Us</NavLink>
                    </NavItem>
                </div>
                
            </Nav>

            <h2>Dashboard will go here</h2>
        </div>
        
    )
}

export default Dashboard;