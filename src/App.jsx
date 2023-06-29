import React from "react";
//Styles
import { GlobalStyle } from "./styles/GlobalStyle";

import {
  createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Homepage";
import BlogDetails from "./pages/BlogDetails";
import PostByCategoryPage from "./pages/PostByCategoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavDashboard from "./Dashboard/components/NavDashboard";
import ManageCategoryPage from "./pages/ManageCategoryPage";
import ManagePostPage from "./pages/ManagePostPage";
import EditCategoryPage from "./pages/EditCategoryPage";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import ErrorPage from "./routes/ErrorPage";

// const router = createBrowserRouter(
const router = createHashRouter(
  // <GlobalStyle />
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<NavBar />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />,
        <Route path="blog/details/:id/:cat" element={<BlogDetails />} />,
        <Route path="category/:id" element={<PostByCategoryPage />} />,
        {/* Authentiction */}
        <Route path="login" element={<LoginPage />} />,
        <Route path="register" element={<RegisterPage />} />,
      </Route>
      {/* Dashboard Section */}
      <Route
        path="dashboard"
        element={<NavDashboard />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<HomePage />} />,
        <Route path="blog/details/:id/:cat" element={<BlogDetails />} />,
        <Route path="category/:id" element={<PostByCategoryPage />} />,
        <Route path="category" element={<ManageCategoryPage />} />
        <Route path="category/edit/:id" element={<EditCategoryPage />} />, ,
        <Route path="post" element={<ManagePostPage />} />,
        <Route path="post/create" element={<CreatePostPage />} />,
        <Route path="post/edit/:id" element={<EditPostPage />} />,
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
