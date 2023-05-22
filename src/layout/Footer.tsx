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
                <p className="fw-light fs-6">Created with ViteJS, ReactJS, TypeScript & Bootstrap</p>
                <img src="/public/vite.svg" alt="ViteJS" />
                <img src="/public/react.svg" alt="ReactJS" />
                <p className="fw-light fs-6">Hosted by Netlify</p>
                <small>©2023 Holidaze</small>
            </Container>
        </footer>
        </>
    )
}
