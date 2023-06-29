import React from "react";
import { useGetAllCategoryQuery } from "../features/Post/PostApi";
import { Footer, NavLinkStlye } from "../styles/NavBarStyle";
import LoadingPage from "../routes/LoadingPage";
import ErrorPage from "../routes/ErrorPage";

const FooterComp = () => {
  const { data, error, isLoading } = useGetAllCategoryQuery();

  return (
    <Footer>
      <div className="copy">&copy; Copyright 2023</div>
    </Footer>
  );
};

export default FooterComp;
