import styled from "styled-components";
import ResponsiveStyle from "./ResponsiveStyle";

export const HomePageStyle = styled.div`
  /* margin-top: 3rem; */
  .related {
    margin: 2rem 0rem;
  }
  h2 {
    padding-bottom: 0.5rem;
  }
`;

export const HomePageResponsiveStyle = styled(ResponsiveStyle)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 1rem;
  position: relative;
  gap: 2rem;
  /* flex-direction:column; */

  .related {
    margin: 2rem 0rem;
  }
  h2 {
    padding-bottom: 0.5rem;
  }
  @media (max-width: 916px) {
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
    grid-template-columns: 1fr;
  }
`;

export const SearchStyle = styled.div`
  /* display: none; */
  position: fixed;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-content: center;
  left: 30%;
  right: 20%;
  top: 7px;
  /* background: #634b78; */
  /* width: fit-content; */
`;
