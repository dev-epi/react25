import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Cv from "./pages/Cv";
import Layout from "./pages/Layout";
import AuthLayout from "./auth/AuthLayout";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { useContext, useState } from "react";
import { UserContext } from "./services/UserContext";
export default function AppRoutes() {

  let {token} = useContext(UserContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ?<Layout /> : <Navigate to='/auth/signin'/>}>
          <Route path="contact" element={<h1>Test</h1>} />
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cv" element={<Cv />} />
          <Route path="user/:id" element={<User/> } />
        </Route>
        <Route path="/auth" element={!token ?<AuthLayout /> : <Navigate to='/'/>}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:resetkey" element={<ResetPassword />} />
        </Route>

        <Route path="/logout" element={<Navigate to="/auth/signin" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
