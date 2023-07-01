import styled from "styled-components";

const ResponsiveStyle = styled.div`
  width: 96%;
  max-width: 1600px;
  margin: 0rem auto;

  @media (max-width: 1440px) {
    width: 96%;
    max-width: 1050px;
  }
  @media (max-width: 1100px) {
    width: 96%;

    max-width: 900px;
  }

  @media (max-width: 916px) {
    width: 96%;

    max-width: 700px;
  }
  /* @media (max-width: 769px) {
    display: block;
    width: 85%;
    max-width: 600px;
  }
  @media (max-width: 550px) {
    display: block;
    width: 85%;
    max-width: 400px;
  } */
`;

export default ResponsiveStyle;
