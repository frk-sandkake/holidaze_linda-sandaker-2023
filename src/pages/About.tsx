import { Container } from "react-bootstrap";
import { Link } from "../components/Link";

export default function About() {
    return (
    <>
    <Container className="vh-100">
        <h1>About page</h1>
        <p>In till that happens please look through our Brand Guide</p>
        <Link to={"https://ms-sandcake.notion.site/Brand-Style-Guide-for-Holidaze-81091aceeb034908abbb0b4ff491e461"}>
            Holidaze Brand Guides
        </Link>
    </Container>
    </>
    )
}