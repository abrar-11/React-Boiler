import React from "react";

import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
