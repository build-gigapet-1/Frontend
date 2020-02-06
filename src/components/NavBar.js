import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png';

const NavBar = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className='navContainer'>   
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
            </Nav>
            <div className='customSelect'>
                <Navbar className='mobileNav' color="faded" dark>
                    <NavbarBrand href="/" className="mr-auto"><img src={logo} alt='logo'/></NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" color='dark'/>
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav className='toggleNav' navbar>
                        <NavItem>
                            <NavLink href="/login">Log In</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/registration">Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://kkslider2130.github.io/Gigapet-Marketing-proto/team.html">Our Team</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBar;