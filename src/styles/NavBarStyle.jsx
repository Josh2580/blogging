import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ResponsiveStyle from "./ResponsiveStyle";

export const HeaderResponsive = styled(ResponsiveStyle)`
  display: flex;
  justify-content: space-between;
  /* background: #634b78; */
`;

export const Header = styled.div`
  display: flex;
  height: ${(props) => props.responsiveHeight};
  position: fixed;
  gap: 1rem;
  width: 100%;
  margin-bottom: 5rem;
  z-index: 2;
  background-color: #634b78;
  h1,
  p,
  div {
    color: #e6e6e6;
  }
`;

export const BurgerLinks = styled.div``;

export const Burger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 40px;
  width: 40px;
  /* background: #634b78; */
  .icon {
    /* background: #634b78; */
    color: white;
  }
`;

export const LogoStyle = styled(Burger)`
  padding: 0px;
  justify-content: left;
  img {
    width: 20px;
    height: 20px;
    margin: 5px 0px;
    /* background: #634b78; */
  }
`;

export const NavStyle = styled.div`
  display: ${(props) => props.NavDisplay};
  flex-direction: column;
  position: absolute;
  margin-top: 2rem;
  right: 10%;
  /* background: #634b78; */
`;

export const NavLinkStlye = styled(NavLink)`
  /* display: ${(props) => props.NavDisplay}; */
  font-size: 1.5rem;
  text-decoration: none;
  /* border-bottom: 1px solid black; */
  color: #f2f2f2;
  /* background: #634b78; */

  padding: 0.3rem 1rem;
  select {
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  background: #634b78;
  width: 100%;
  position: block;
  bottom: 0px;
  align-items: center;
  margin-top: 20px;
  div {
    font-size: 1rem;
  }
  .cat {
    display: flex;
    flex-wrap: wrap;
  }
  h3 {
    padding: 1rem 0rem 0rem 1rem;
    color: white;
  }
  .copy {
    background: #2d0f47;
    width: 100%;
    padding: 5px 1rem;
    color: white;
    text-align: center;
  }
`;
