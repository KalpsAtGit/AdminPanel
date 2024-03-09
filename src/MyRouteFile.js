import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Admin/Navbar";

const MyRouteFile = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Navbar />} />   
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRouteFile;