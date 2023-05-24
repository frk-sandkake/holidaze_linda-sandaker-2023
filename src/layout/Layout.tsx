import Header from "./Header";
import { Footer } from "./Footer";
import { Outlet as OutletRrd } from "react-router-dom";
import { Container } from "react-bootstrap";


function Layout() {
    return (
        <>
            <Header/>
            <Container className="py-4 vh-100">
                <OutletRrd/>
            </Container>
            <Footer/>
        </>
    )
}

export default Layout