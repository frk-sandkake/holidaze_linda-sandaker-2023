import { Navbar as NavbarBs, Nav, Button, Container, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <>
    <NavbarBs collapseOnSelect expand="false">
        <Container className='d-flex flex-row justify-content-between' >
        <NavbarBs.Brand href="/">
            <img src="/public/images/logo_text_horizontal.png" alt="" height="48px" />
        </NavbarBs.Brand>
        <div role="group" className='d-flex flex-row gap-3'>
        <Button className='btn-sm' variant='outline-primary' type='button'>Sign Up</Button>
        <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <NavbarBs.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                <Nav.Link to='/venues' as={NavLink}>Venues</Nav.Link>
                <NavDropdown
                title="Dropdown"
                id="collasible-nav-dropdown"
                >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </NavbarBs.Collapse>
        </Container>
    </NavbarBs>
    </>
    )
}

export default Navbar
