import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Buhu, route not found</h1>
            <Link to='..' relative='path' aria-label="Back button">Back</Link>
        </div>
    )
}
