import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Details from "./pages/Details";
import Gallery from "./pages/Gallery";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
