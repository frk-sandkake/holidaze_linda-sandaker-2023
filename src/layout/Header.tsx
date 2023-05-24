import { Container } from "react-bootstrap"
import Navbar from "./Navbar"
import Search from "./Search"

function Header() {
  return (
    <>
      <header className="sticky-top shadow-sm surface-container">
          <Container>
            <Navbar/>
          </Container>
          <Container className="d-flex justify-content-center p-2" role="row" aria-label="Search form">
            <Search/>
          </Container>
      </header>
    </>
  )
}

export default Header
