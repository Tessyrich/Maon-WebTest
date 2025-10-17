/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Mainlayout />}>
            <Route
              index
              element={<Home />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
