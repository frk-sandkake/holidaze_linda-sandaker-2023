import { Navbar as NavbarBs, Nav, Button, Container, Offcanvas, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <>
    {['lg'].map((expand) => (
    <NavbarBs key={expand} expand={expand}>
        <Container fluid >
        <NavbarBs.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <NavbarBs.Brand href="/">
            <img src="/public/images/logo_text_horizontal.png" alt="" height="48px" />
        </NavbarBs.Brand>
        <NavbarBs.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
        >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                <Nav.Link to='/venues' as={NavLink}>Venues</Nav.Link>
                <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
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
            </Offcanvas.Body>
        </NavbarBs.Offcanvas>
        <Button className='btn-sm' variant='outline-primary' type='button'>Sign Up</Button>
        </Container>
    </NavbarBs>
    ))}
    </>
    )
}

export default Navbar
