import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png';

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
                    <NavLink href="https://kkslider2130.github.io/Gigapet-Marketing-proto/team.html">Our Team</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Sign Out</NavLink>
                </NavItem>
            </div>
            <div className='customSelect'>
                <select>
                    <option value="" selected="selected">Menu</option> 
                    <option value="/dashboard">Dashboard</option> 
                    <option value="/addmeal">Add Meal</option> 
                    <option value="/meals">View Meal</option> 
                    <option value="/">Our Team</option> 
                    <option value="/login">Sign Out</option>
                </select>
            </div>
        </Nav>
    )
}

export default NavBarDashboard;

