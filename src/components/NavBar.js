import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../logo.png';

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
                    <NavLink href="#">About Us</NavLink>
                </NavItem>
            </div>
        </Nav>
    )
}

export default NavBar;