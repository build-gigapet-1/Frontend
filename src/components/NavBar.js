import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png';

const NavBar = props => {
    return (
        <Nav className='dashNav'>
            <a href='https://kkslider2130.github.io/Gigapet-Marketing-proto/#'><img src={logo} alt='logo'/></a>
            <div className='links'>
                <NavItem>
                    <NavLink href="https://kkslider2130.github.io/Gigapet-Marketing-proto/#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Log In</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/registration">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://kkslider2130.github.io/Gigapet-Marketing-proto/team.html">Our Team</NavLink>
                </NavItem>
            </div>
            <div className='customSelect'>
                <select>
                    <option value="https://kkslider2130.github.io/Gigapet-Marketing-proto/#" selected="selected">Menu</option> 
                    <option value="/">Home</option> 
                    <option value="/login">Log In</option> 
                    <option value="/register">Register</option> 
                    <option value="https://kkslider2130.github.io/Gigapet-Marketing-proto/team.html">Our Team</option> 
                </select>
            </div>
        </Nav>
    )
}

export default NavBar;