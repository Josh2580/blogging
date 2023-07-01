import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
//
import { DashStyle } from "../../styles/DashboardStyle";
// import HomePage from "../../pages/HomePage";
import HomePage from "../../pages/Homepage";

const DashboardPage = () => {
  const userInfo = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : ""
  );
  const { data } = userInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const NoData = !data;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    NoData && navigate("/login");
  }, [NoData]);

  return (
    <div>
      {/* <HomePage /> */}
      {/* <DashStyle>
        <h1>My Dashboard</h1>
        <div>
          <p>profile picture</p>
          <img src="#" alt="Profile Picture" />
          <h2>blogs</h2>
          <h2>categorys</h2>
          <h2>Sign Out</h2>
        </div>
        {data && (
          <h2>
            {data.username} have lastName as {data.last_name}
          </h2>
        )}

        <br />
      </DashStyle> */}
    </div>
  );
};

export default DashboardPage;
