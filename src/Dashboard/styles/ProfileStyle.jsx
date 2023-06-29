import styled from "styled-components";

export const ProfileStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  img {
    width: 250px;
    height: 250px;
    border-radius: 15px;
  }
  #profilePicture {
    display: none;
  }
  #pictureLabel,
  button {
    border: 1px solid #a3a3a3;
    font-size: 1rem;
    padding: 10px;
    border-radius: 10px;
    width: fit-content;
  }
`;

export const SubProfileStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;

  input,
  select {
    width: 100%;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #a3a3a3;
  }
`;
