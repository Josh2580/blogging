import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
// Styles
import {
  NavLinkStlye,
  HeaderResponsive,
  LogoStyle,
  Burger,
  NavStyle,
} from "../styles/NavBarStyle";
import { Header } from "../styles/NavBarStyle";
import { FaBars, FaTimes } from "react-icons/fa";
//
import { useGetAllCategoryQuery } from "../features/Post/PostApi";
import LoadingPage from "../routes/LoadingPage";
import ErrorPage from "../routes/ErrorPage";
// import Logo from "../static/img/logo.png";
import FooterComp from "./FooterComp";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../newStyles/Card";

const LogoImage = "logo.png";
const LogoPath = `static/img/${LogoImage}`;

// const LogoPath = `src/assets/static/img/${LogoImage}`;

const NavBar = () => {
  const { data, error, isLoading } = useGetAllCategoryQuery();
  const navigate = useNavigate();

  const [burgerState, setBurgerState] = useState(true);

  const userInfo = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : ""
  );
  const { data: userData } = userInfo;

  const burgerHandler = () => {
    setBurgerState((bar) => !bar);
  };

  const AccountNavHandler = (e) => {
    // console.log(e.target.value);
    let value = e.target.value;
    if (value.length >= 2) {
      // console.log("you can navigate");
      navigate(value);
      burgerHandler();
    }
  };

  const LogoHandler = () => {
    navigate("/");
    setBurgerState(true);
  };

  return (
    <Card
      flexDirection="column"
      // gap="3rem"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Header responsiveHeight={burgerState ? "fit-content" : "90vh"}>
        <HeaderResponsive>
          <>
            <LogoStyle onClick={() => LogoHandler()}>
              <img src={LogoPath} alt="logo" />
            </LogoStyle>

            <Burger onClick={burgerHandler}>
              {burgerState ? (
                <FaBars className="icon" />
              ) : (
                <FaTimes className="icon" />
              )}
            </Burger>
          </>
          <>
            <NavStyle
              NavDisplay={burgerState ? "none" : "flex"}
              // onClick={burgerHandler}
            >
              <NavLinkStlye to="/" onClick={burgerHandler}>
                Home
              </NavLinkStlye>
              <Accounts background="">
                {userData && (
                  <select onChange={(e) => AccountNavHandler(e)}>
                    <option value=" ">Accounts</option>
                    <option value="/category">Categorys</option>
                    <option value="/post">Posts</option>
                  </select>
                )}
              </Accounts>

              {isLoading ? (
                <LoadingPage />
              ) : error ? (
                <ErrorPage error={error} />
              ) : (
                <>
                  {data.map((cat) => (
                    <NavLinkStlye
                      onClick={burgerHandler}
                      to={`category/${cat.id}`}
                      key={cat.id}
                    >
                      <div>{cat.name}</div>
                    </NavLinkStlye>
                  ))}
                </>
              )}
            </NavStyle>
          </>
        </HeaderResponsive>
      </Header>
      <Card flexDirection="column" margin="38px 0px" justifyContent="center">
        <Outlet />
      </Card>
      <FooterComp />
    </Card>
  );
};

const Accounts = styled(Card)`
  /* display: ${(props) => props.NavDisplay}; */
  font-size: 1.5rem;
  text-decoration: none;
  /* border-bottom: 1px solid black; */
  color: #f2f2f2;
  /* justify-content: space-between; */
  padding: 0.3rem 1rem;

  select {
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
    background: none;
    border: none;
    outline: none;
    option {
      color: black;
      background: none;
    }
  }
`;

export default NavBar;
