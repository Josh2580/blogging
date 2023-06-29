import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { Card } from "../newStyles/Card";

const LoadingPage = () => {
  return (
    <Card
      height="70vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <PuffLoader
        color="blueviolet"
        loading="true"
        speedMultiplier={1}
        size={100}
      />
    </Card>
  );
};

export default LoadingPage;
