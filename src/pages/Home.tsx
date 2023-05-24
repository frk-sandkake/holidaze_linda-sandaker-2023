import { useState } from "react"
import { Button } from "react-bootstrap"
import { Counter } from "../components/Counter"

export default function Home() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Hello Home page!</h1>
            <Button type='button' className="fw-bold" variant="primary" onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </Button>
            <Counter/>
            <p>I'm a paragraph</p>
        </div>
    )
}
