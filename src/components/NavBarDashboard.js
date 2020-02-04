import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../logo.png';

const NavBarDashboard = props => {
    return (
        <Nav className='dashNav'>
            <a href='https://kkslider2130.github.io/Gigapet-Marketing-proto/#'><img src={logo} alt='logo'/></a>
            <div className='links'>
                <NavItem>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/addmeal">Add Meal</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/meals">View Meals</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Sign Out</NavLink>
                </NavItem>
            </div>
        </Nav>
    )
}

export default NavBarDashboard;

