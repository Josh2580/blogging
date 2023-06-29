import styled from "styled-components";

export const CardShadow = styled.div`
  display: ${(props) => props.EditDisplay};
  /* display: none; */
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

export const DetailForm = styled.form`
  background: white;
  width: 80%;
  height: 60%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  position: absolute;
  left: 10%;
  color: black;
  margin: 10% auto;
`;

export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  input {
    border-radius: 10px;
  }
`;

export const TheButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0rem;
`;

export const Button = styled.button`
  /* background: #71eaf2; */
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 10px;
`;
