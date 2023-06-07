import  Navbar from 'react-bootstrap/Navbar'
import  Nav from 'react-bootstrap/Nav'
import  Button from 'react-bootstrap/Button'
import  Container from 'react-bootstrap/Container'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/authSlice';
import { RootState } from '../redux/store';
import Search from "./Search"

function NavbarBs() {
    const user = useAppSelector((state: RootState) => state.auth.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      navigate("/");
    }

    return (
    <>
    <Navbar collapseOnSelect expand="false">
        <Container className='d-flex flex-row justify-content-between align-items-center fw-bold' >
        <Navbar.Brand href="/">
            <img src="/Logo_text_horizontal.png" alt="" width="120px" />
        </Navbar.Brand>
        {user ? (
            <Nav className='d-flex flex-row align-items-center gap-3'>
            <Nav.Link to='/profile' as={NavLink}>Profile</Nav.Link>

            <Button className='btn-sm' variant='outline-primary' type='button' onClick={handleLogout}>
                Log Out
            </Button>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Nav>
        ) : (
            <Nav className='d-flex flex-row align-items-center gap-3'>
            <Nav.Link to='/venues' as={NavLink}>Venues</Nav.Link>
            <Nav.Link to='/login' as={NavLink}>
                <Button className='btn-sm' variant='outline-primary' type='button'>
                Log In
                </Button>
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Nav>
        )}

        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-row justify-content-around pe-3">
            <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
            <Nav.Link to='/venues' as={NavLink}>Venues</Nav.Link>
            <Nav.Link to='/profile' as={NavLink}>Profile</Nav.Link>
            <Nav.Link to='/signup' as={NavLink}>Sign Up</Nav.Link>
        </Nav>
        <Container className="d-flex justify-content-center p-2" role="row" aria-label="Search form">
            <Search/>
        </Container>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default NavbarBs;
