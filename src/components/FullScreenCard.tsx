import { ReactNode } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

type FullScreenCardProps = {
    children: ReactNode
}

export function FullScreenCard({ children }: FullScreenCardProps) {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Row style={{maxWidth:'740px'}} className="w-100 mt-2 d-flex flex-column justify-content-center align-items-center">
                {children}
            </Row>
        </Container>
    )
}

FullScreenCard.Body = function ({ children }: FullScreenCardProps) {
    return (
            <Col className="p-4 shadow rounded">{children}</Col>
    )
}


FullScreenCard.BelowCard = function ({ children }: FullScreenCardProps) {
    return <Col className="my-2 d-flex justify-content-center">{children}</Col>
}