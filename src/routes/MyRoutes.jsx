import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//APP Routes
import NavBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
// import ContactPage from "../pages/ContactPage";
import PostByCategoryPage from "../pages/PostByCategoryPage";
import ErrorPage from "./ErrorPage";

import ManageCategoryPage from "../pages/ManageCategoryPage";
// import EditCategory from "../components/EditCategory";
import ManagePostPage from "../pages/ManagePostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import EditCategoryPage from "../pages/EditCategoryPage";
//Dashboard
import DashboardPage from "../Dashboard/pages/DashboardPage";
import NavDashboard from "../Dashboard/components/NavDashboard";
import ProfilePage from "../Dashboard/pages/ProfilePage";

const MyRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      errorElement: <ErrorPage />,
      children: [
        { path: "category/:id", element: <PostByCategoryPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
      ],
    },
    {
      path: "/dashboard",
      element: <NavDashboard />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <DashboardPage /> },
        //Profile
        { path: "profile", element: <ProfilePage /> },
        //Preview
        //Blogs
        { path: "blog", element: <ManagePostPage /> },
        { path: "blog/edit/:id", element: <EditPostPage /> },
        { path: "blog/create", element: <CreatePostPage /> },
        //Categorys
        { path: "category", element: <ManageCategoryPage /> },
        { path: "category/edit/:id", element: <EditCategoryPage /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default MyRoutes;
