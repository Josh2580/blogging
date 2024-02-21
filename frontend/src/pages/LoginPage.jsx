import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../features/Post/PostApi";
import { setCredentials } from "../features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Login,
  Input,
  TheButtons,
  Button,
  DetailForm,
  LinkStyle,
} from "../styles/LoginPageStyles";

const LoginPage = () => {
  const userInfo = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : ""
  );
  const { data: userData } = userInfo;

  const [loginUser] = useLoginUserMutation();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const userData = await loginUser({ email, password });
    // console.log(userData);
    if (userData.data) {
      // Notification Message
      toast(`Login Successful`);
      // Sending to the state User Token
      dispatch(setCredentials({ ...userData }));
      // Sending to the state User Profile
      setEmail("");
      setPassword("");
      //Navigation
      //  navigate("/dashboard");
      navigate(-1);
    } else if (userData.error) {
      toast(`Login Failed: ${userData.error.data.detail}`);
    }
  };

  useEffect(() => {
    userData && navigate(-1);
  }, [userData, navigate]);

  return (
    <Login>
      <ToastContainer />

      <DetailForm onSubmit={SubmitHandler}>
        <h1>Login Page</h1>
        <div>
          <Input>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              maxLength={50}
              required
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // onChange={handlerUsernameInput}
            />
          </Input>
          <Input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              maxLength={50}
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // onChange={handlerPasswordInput}
            />
          </Input>
          <p>
            <span>
              <i>Don't have account yet? </i>
            </span>
            <LinkStyle to="/register"> Register</LinkStyle>
          </p>

          <TheButtons>
            <Button>Login</Button>
          </TheButtons>
        </div>
      </DetailForm>
    </Login>
  );
};

export default LoginPage;
