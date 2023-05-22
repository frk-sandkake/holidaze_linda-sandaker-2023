import { Button, Container, Form } from "react-bootstrap"
import Navbar from "./Navbar"

function Header() {
  return (
    <>
      <header className="sticky-top shadow-sm surface-container">
          <Container>
            <Navbar/>
          </Container>
          <Container className="p-2" role="row" aria-aria-label="Search form">
            <Form className="mx-auto d-flex align-items-center" style={{maxWidth:'500px'}} >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
              />
              <Button className="btn-sm" variant="outline-secondary" type="submit">Search</Button>
            </Form>
          </Container>
      </header>
    </>
  )
}

export default Header
