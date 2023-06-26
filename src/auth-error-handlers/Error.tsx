import { useRouteError } from "react-router-dom"

interface RouteError {
    message?: string;
    status?: number;
    statusText?: string;
}

export default function Error() {
    const error = useRouteError() as RouteError;

    return (
        <>
            <h1>Error {error.message}</h1>
            <pre>{error.status} - {error.statusText}</pre>
        </>
    )
}
