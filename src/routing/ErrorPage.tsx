import { Heading, Text } from "lucide-react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom"


const ErrorPage = () => {
  const error = useRouteError();
  isRouteErrorResponse(error)

  return (
    <>
      <Heading>Ooops...</Heading>
      <Text>{isRouteErrorResponse(error) ? 'Invalid page' : 'Unexpected error'}</Text>
    </>
  )
}

export default ErrorPage
