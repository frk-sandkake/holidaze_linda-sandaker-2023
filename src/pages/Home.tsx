import { useState } from "react"
import { Button, Container } from "react-bootstrap"

export default function Home() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Container>
            <h1>Hello Home page!</h1>
            <Button type='button' className="fw-bold" variant="primary" onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </Button>
            <p>I'm a paragraph</p>
            </Container>
        </div>
    )
}
