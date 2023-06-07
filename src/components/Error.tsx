import { useRouteError } from "react-router-dom"

interface RouteError {
    message?: string;
    status?: number;
    statusText?: string;
}

function Error() {
    const error = useRouteError() as RouteError;
    const { message, status, statusText } = error || { message: "An error occurred." }

    return (
        <>
            <h1>Error {status}: {message}</h1>
            <p>{statusText}</p>
        </>
    )
}

export default Error;
