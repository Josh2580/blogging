import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavDashStyle = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const NavLeftStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background: #634b78;
  color: white;
  transition: width 5s ease-in-out;

  h1 {
    color: white;
  }
  @media (max-width: 1000px) {
    display: ${(props) => props.NavDisplay};
    position: absolute;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: height 5s ease-in-out;
  }
`;

export const NavRightStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background: #539cb7; */
`;

export const TopRightStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 4rem;
  background: #ececec;
  padding: 0rem 1rem;
  font-weight: bold;
`;

export const NavProfileStyle = styled.div``;

export const NavMenuStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1000px) {
    margin-top: 2rem;
  }
`;

export const NavExtraStyle = styled.div``;

export const SampleStyle = styled.div`
  /* display: flex;
  height: ${(props) => props.responsiveHeight};
  position: fixed;
  gap: 1rem;
  width: 100%;
  margin-bottom: 5rem;
  z-index: 2;
  background-color: #634b78; */
`;

export const NavGroup = styled.div`
  /* padding-top: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  gap: 1rem;
  .logout {
    color: white;
    text-decoration: none;
    width: 100%;
    font-size: 1.5rem;
    border-radius: 1rem;
    p {
      padding: 0.5rem 1rem;
    }
    :focus,
    :active {
      p {
        color: #634b78;
        background-color: white;
      }
    }
  }
`;

export const NavStyle = styled(NavLink)`
  color: white;
  text-decoration: none;
  width: 100%;
  font-size: 1.5rem;
  border-radius: 1rem;
  p {
    padding: 0.5rem 1rem;
  }
  :focus,
  :active {
    p {
      color: #634b78;
      background-color: white;
    }
  }
`;

export const OutletStyle = styled.div`
  padding: 1rem;
  position: relative;
`;

export const BurgerDashboard = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    height: 40px;
    width: 40px;
    color: white;
    background-color: #634b78;
    border-radius: 50%;
    z-index: 2000;
  }
`;
