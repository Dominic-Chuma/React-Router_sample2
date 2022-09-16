import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Outlet} from "react-router-dom";




let Layout = () => {
    return (
        <>
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className='nav-style'>
            {/*<Container fluid>*/} {/* Container made fluid to remove horizontal padding*/}
            <Container fluid className='nav-bar-left nav-bar-right'>
               
                <Navbar.Brand className='nav-brand' href="/">Net-Zone</Navbar.Brand> {/* I initially used "Team-Net" */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto nav-bar-left">
                    <Nav.Link href="/team">Team</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                    
                </Nav>
                <Nav>
                    {/* <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link> */}
                    <NavDropdown title="Continue" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action/3.2">
                        Register
                    </NavDropdown.Item>
                    
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>


            {/* Commence the footer Navbar */}
            {/* <Navbar bg="light" >

            </Navbar> */}

            <Outlet/> {/* Remeber the Outlet*/}
        </>
    )
}


export default Layout;