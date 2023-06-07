import { Container } from "react-bootstrap"
import Navbar from "./Navbar"

function Header() {
  return (
    <>
      <header className="sticky-top shadow-sm surface-container">
          <Container>
            <Navbar/>
          </Container>
      </header>
    </>
  )
}

export default Header
