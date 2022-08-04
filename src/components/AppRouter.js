import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import { AuthContext } from "../context";

export default function AppRouter() {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      <Route path="about" element={<About />} />
      <Route exact path="posts" element={<Posts />} />
      <Route exact path="posts/:id" element={<PostIdPage />} />
      <Route path="*" element={<Posts />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
