import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Project from "./Pages/Project";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
