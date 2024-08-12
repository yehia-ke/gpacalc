import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import SignUp from "./pages/signup";
import GPACalculator from "./pages/GPACalculator/GPACalculator";
import CourseCalculator from "./pages/CourseCalculator/CourseCalculator";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gpa-calculator" element={<GPACalculator />} />
        <Route path="/course-calculator" element={<CourseCalculator />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
