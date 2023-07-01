import styled from "styled-components";
import { HomePageStyle } from "./HomePageStyle";

export const ManageCatStyle = styled(HomePageStyle)`
  width: fit-content;
  font-size: 14px;
  h2 {
    /* font-weight: bolder; */
    align-items: center;
    text-align: center;
    padding: 10px;
    padding-top: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 1rem 0rem;
    gap: 0.5rem;
    .success {
      background: #c2fbc2;
      padding: 0.5rem;
      font-weight: lighter;
      width: max-content;
      height: fit-content;
      /* color: white; */
    }
  }
  label,
  input {
    font-size: 1.2rem;
    padding: 0.5rem;
  }

  table,
  td {
    border-spacing: 10px;
    td {
      padding: 10px 5px;
    }
  }
  table {
    overflow: scroll;

    /* background: yellow; */
  }
`;
