import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { logout } from "../../features/auth/authSlice";
//
import { useGetAllCategoryQuery } from "../../features/Post/PostApi";

import { useSelector, useDispatch } from "react-redux";
import LoadingPage from "../../routes/LoadingPage";
import ErrorPage from "../../routes/ErrorPage";
//Styles
import {
  NavDashStyle,
  NavExtraStyle,
  NavMenuStyle,
  NavProfileStyle,
  NavLeftStyle,
  NavRightStyle,
  TopRightStyle,
  OutletStyle,
  NavStyle,
  NavGroup,
  BurgerDashboard,
} from "../styles/NavDashboardStyles";
import { Card } from "../../newStyles/Card";
import { Button } from "../../newStyles/Button";
import styled from "styled-components";

//My App
const NavDashboard = () => {
  const { data, error, isLoading } = useGetAllCategoryQuery();

  const userInfo = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : ""
  );
  const { data: userData } = userInfo;

  const [burgerState, setBurgerState] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const burgerHandler = () => {
    setBurgerState((bar) => !bar);
  };

  useEffect(() => {
    if (userData === undefined) {
      navigate("/login");
    }
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const PostByCategoryHandler = (e) => {
    let id = e.target.value;
    if (id.length === 0) {
      // console.log("empty ID");
    } else {
      let URL = userData
        ? `/dashboard/category/${id}` // same as `/dashboard/category/${id}`
        : `category/${id}`;
      // console.log(URL);
      navigate(URL);
      burgerHandler();
    }
  };

  return (
    <div>
      <NavDashStyle>
        <NavLeftStyle NavDisplay={burgerState === true ? "none" : "flex"}>
          <NavMenuStyle>
            <NavGroup>
              <div>
                <div onClick={() => setBurgerState(true)}>
                  <NavStyle to="/dashboard">
                    <p>Dashboard</p>
                  </NavStyle>
                  <NavStyle to="/dashboard/post">
                    <p>Manage Post's</p>
                  </NavStyle>
                </div>
                <Accounts display="none">
                  {isLoading ? (
                    <LoadingPage />
                  ) : error ? (
                    <ErrorPage error={error} />
                  ) : (
                    <select onChange={(e) => PostByCategoryHandler(e)}>
                      {/* <option value="emptyCategory">Blog by Categories</option> */}
                      <option value="">Blog by Categories</option>

                      {data.map((cat) => (
                        <option value={cat.id} key={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  )}
                </Accounts>
              </div>
              <div>
                <NavStyle to="category" onClick={() => burgerHandler()}>
                  <p>Manage Category's</p>
                </NavStyle>
                <div className="logout" onClick={() => logoutHandler()}>
                  <p>Logout</p>
                </div>
              </div>
            </NavGroup>
          </NavMenuStyle>
        </NavLeftStyle>
        <NavRightStyle>
          <TopRightStyle>
            <BurgerDashboard
              onClick={burgerHandler}
              // NavDisplay={burgerState == true ? "none" : "flex"}
            >
              {burgerState ? <FaBars /> : <FaTimes />}
            </BurgerDashboard>
            <NavExtraStyle>
              <p>You are Logged in</p>
            </NavExtraStyle>
            <NavProfileStyle>
              <Button onClick={() => navigate("post/create")}>
                Create New Post
              </Button>
            </NavProfileStyle>
          </TopRightStyle>
          <OutletStyle>
            <Outlet />
          </OutletStyle>
        </NavRightStyle>
      </NavDashStyle>
    </div>
  );
};

const Accounts = styled(Card)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #f2f2f2;
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
export default NavDashboard;
