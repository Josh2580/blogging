import styled from "styled-components";
import { HomePageStyle } from "./HomePageStyle";

export const CreatePostStyle = styled(HomePageStyle)`
  /* background: #b6ffdb; */
  /* position: relative; */
  margin: auto;
  width: 100%;
  max-width: 700px;
  padding: 1rem;
`;
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam sapiente laboriosam iste labore praesentium explicabo magnam cumque suscipit laborum?

export const InputsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input,
  select,
  option,
  textarea {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 18px;
    background: #ededed;
    border: none;
    overflow-y: scroll;
    ::placeholder {
      color: #9b9b9b;
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const BodyInputs = styled(Inputs)`
  position: relative;
  min-height: fit-content;
  width: 100%;
  /* .row {
    height: 90%;
    width: 100%;
  } */
  .editor-input {
    /* position: relative; */
    /* height: ; */
    width: 100%;
  }
  /* background-color: #c4c4c4; */
`;

export const CatOption = styled.option`
  color: #c4c4c4;
`;
export const PostButton = styled.button`
  /* width: 5rem; */
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 18px;
  background: #ededed;
  border: none;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  :hover {
    background: #634b78;
    color: white;
  }
`;
