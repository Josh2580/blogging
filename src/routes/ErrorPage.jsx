import React from "react";
import NavBar from "../components/NavBar";
import { Card } from "../newStyles/Card";
import { Button } from "../newStyles/Button";

import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  // console.log(error.statusText || error.message);

  return (
    <Card width="100%" height="100%" flexDirection="column">
      <NavBar />
      <Card
        position="absolute"
        zIndex="99999px"
        alignItems="center"
        justifyContent="center"
        // background="red"
        width="100%"
        height="100%"
        flexDirection="column"
        gap="1rem"
      >
        <h3>There is an Error</h3>
        <Card
          fontSize="20px"
          background="rgb(253, 165, 165)"
          // width="100%"
          height="fit-content"
          padding="1rem"
          justifyContent="center"
          color="black"
        >
          <h2> {error.statusText || error.message}</h2>
        </Card>
        <Button width="fit-content" onClick={() => navigate("/")}>
          Return to home
        </Button>
      </Card>
    </Card>
  );
};

export default ErrorPage;
