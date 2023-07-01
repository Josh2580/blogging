import React from "react";
import { Card } from "../newStyles/Card";
import { Button } from "../newStyles/Button";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const PopUp = ({ pop }) => {
  const PopHandler = ({ popButton }) => {
    console.log(popButton);
    pop({ popButton });
  };

  return (
    <Card
      background="#eeeeee"
      maxWidth="500px"
      width="100%"
      flexDirection="column"
      padding="1rem"
      borderRadius="10px"
      alignItems="center"
      gap="20px"
    >
      <Card display="none" width="100%" justifyContent="right" color="#505050">
        <FaTimes />
      </Card>
      <Title>Delete this Blog</Title>

      <Description>
        Are you sure you want to delete this blog ? <br />
        <sub>This is Irreversible.</sub>
      </Description>
      <Card justifyContent="space-between" width="100%">
        <Button
          width="fit-content"
          display="flex"
          alignItems="center"
          gap="1rem"
          onClick={() => PopHandler({ popButton: "cancel" })}
        >
          Cancel
        </Button>
        <Button
          width="fit-content"
          display="flex"
          alignItems="center"
          gap="1rem"
          border="1px solid red"
          background="white"
          color="red"
          hoverBackground="red"
          hoverColor="white"
          onClick={() => PopHandler({ popButton: "delete" })}
        >
          Delete
        </Button>
      </Card>
    </Card>
  );
};

const Title = styled.h3`
  border-bottom: 1px solid #505050;
  color: #505050;
  width: 100%;
  text-align: center;
  padding-bottom: 5px;
`;

const Description = styled.p`
  color: #505050;
  width: 100%;
`;

export default PopUp;
