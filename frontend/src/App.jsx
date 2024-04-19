import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Goals from "./pages/Goals";
import Tracker from "./pages/Tracker";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
