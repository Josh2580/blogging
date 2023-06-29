import styled from "styled-components";
import ResponsiveStyle from "./ResponsiveStyle";

export const HeroStyle = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  display: flex;
  /* background-color: #634b78; */
  border-radius: 5px;
  border: 1px solid black;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2rem;
  }
  /* h1 {
    color: #353535;
  }
  p {
    color: #777777;
  } */
  h1,
  p {
    color: #e7e7e7;
  }

  /* @media (max-width: 769px) {
    text-align: center;
  } */
`;

export const HeroResponsiveStyle = styled(ResponsiveStyle)``;

export const HeroImgStyle = styled.img`
  position: absolute;
  right: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: brightness(50%);
`;
