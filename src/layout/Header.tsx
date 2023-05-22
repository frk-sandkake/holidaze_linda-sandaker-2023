import { Container } from "react-bootstrap"

function Header() {
    return (
        <>
        <header className="sticky-top shadow-sm surface-container">
            <Container>
                <img src="/public/images/logo_text_horizontal.png" alt="" height="48px" />
            </Container>
        </header>
        </>
    )
}

export default Header