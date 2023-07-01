import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AllCard = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* @media (max-width: 1158px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  } */
  /* @media (max-width: 916px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  } */
  /*
  @media (max-width: 669px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 569px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  } */
`;

export const NewPostStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const EachNew = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const EachCard = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 10px 0px;
  span {
    font-size: 12px;
  }
`;

export const ContentInfoCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  .foot {
    color: #634b78;
    /* padding: 2px 7px; */
    /* border-radius: 4px; */
    /* color: white; */
  }
`;

export const MyNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  img {
    width: 100%;
    height: auto;
    max-height: 200px;
    /* margin: 5px 0px; */
  }
`;

export const ImageCard = styled.div`
  width: 100%;
  /* height: auto; */
  /* height: 40vh; */ // This one was active
  /* border-radius: 5px; */
  /* @media (max-width: 1158px) { // This one was active
    max-height: 40vh;
  } */
  // @media (max-width: 916px) {
  //   height: 40vh;
  // }
  // @media (max-width: 769px) {
  //   height: 40vh;
  // }
  /* @media (max-width: 669px) { // This one was active
    max-height: 30vh;
  } */
  // @media (max-width: 569px) {
  //   height: 30vh;
  // }
  /* img {  // This one was active
    width: 100%;
    height: 90%;
    border-radius: 5px;
  } */
`;
