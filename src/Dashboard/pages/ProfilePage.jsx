import React, { useEffect } from "react";
import ProfileComponents from "../components/ProfileComponents";
import { useSelector } from "react-redux";
import { ProfilePageStyle } from "../styles/ProfilePageStyle";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const { data } = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : ""
  );
  const NoData = !data;

  useEffect(() => {
    {
      NoData && navigate("/login");
    }
  }, [NoData]);

  return (
    <ProfilePageStyle>
      {data && <ProfileComponents data={data} />}
    </ProfilePageStyle>
  );
};

export default ProfilePage;
