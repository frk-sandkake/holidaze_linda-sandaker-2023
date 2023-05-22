import { Container } from "react-bootstrap";

export function Footer() {
    return (
        <>
        <div className="py-4 section-footer">
            <Container>
            <img src="/public/images/3.png" alt="" height="120px" />
            <a href="https://ms-sandcake.notion.site/Brand-Style-Guide-for-Holidaze-81091aceeb034908abbb0b4ff491e461">Brand Style Guide</a>
            </Container>
        </div>
        <footer  className="py-4">
            <Container>
                <small>©2023 Holidaze</small>
            </Container>
        </footer>
        </>
    )
}
