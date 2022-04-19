import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import useActions from "./hooks/useActions";
import About from "./pages/About";
import Details from "./pages/Details";
import Gallery from "./pages/Gallery";

const App: React.FC = () => {
  const { getGalleryAction } = useActions();

  React.useEffect(() => {
    getGalleryAction();
  }, []); // eslint-disable-line

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
