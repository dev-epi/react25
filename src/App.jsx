import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cv from "./pages/Cv";
import Layout from "./pages/Layout";
import AuthLayout from "./auth/AuthLayout";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";

export default function App() {
  return (
    <>
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="contact" element={<h1>Test</h1>}/>
                <Route path="" element={<Home/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="cv" element={<Cv/>}/>
            </Route>
            <Route path="/auth" element={<AuthLayout/>}>
                <Route path="signin" element={<Signin/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route path="forgot-password" element={<ForgotPassword/>}/>
                <Route path="reset-password" element={<ResetPassword/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}
