import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import { Toaster } from "sonner";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
