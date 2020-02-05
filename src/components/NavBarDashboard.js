import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png';

const NavBarDashboard = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <div className='navContainer'>
            <Nav className='dashNav'>
                <a href='https://kkslider2130.github.io/Gigapet-Marketing-proto/#'><img src={logo} alt='logo'/></a>
                <div className='links'>
                    <NavItem>
                        <NavLink href="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/creategigapet">Create Gigapet</NavLink>
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
            </Nav>
            <div className='customSelect'>
                {/* <a href='https://kkslider2130.github.io/Gigapet-Marketing-proto/#'><img src={logo} alt='logo'/></a>
                <select>
                    <option value="" selected="selected">Menu</option> 
                    <option value="/dashboard">Dashboard</option> 
                    <option value="/addmeal">Add Meal</option> 
                    <option value="/meals">View Meal</option> 
                    <option value="/">Our Team</option> 
                    <option value="/login">Sign Out</option>
                </select> */}
                <Navbar className='mobileNav' color="faded" light>
                    <NavbarBrand href="/" className="mr-auto"><img src={logo} alt='logo'/></NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" color='light'/>
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/dashboard">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/addmeal">Add Meal</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/meals">View Meal</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Our Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Sign Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBarDashboard;

