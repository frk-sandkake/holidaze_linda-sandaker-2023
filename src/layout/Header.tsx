import { Button, Container, Form } from "react-bootstrap"
import Navbar from "./Navbar"

function Header() {
    return (
        <>
        <header className="sticky-top shadow-sm surface-container">
            <Container className="d-flex flex-column justify-content-center">
                <Navbar/>
                <Form className="mx-auto d-flex p-2" style={{maxWidth:'360px'}} >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 rounded-pill"
                    aria-label="Search"
                  />
                  <Button className="btn-sm" variant="outline-secondary">Search</Button>
                </Form>
            </Container>
        </header>
        </>
    )
}

export default Header