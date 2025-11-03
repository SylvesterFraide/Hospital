import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
function App() {
  return (
    <>
      {/* <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">// </div> */}
      <BrowserRouter>
        <Navbar LiveScore="LIVESCORE" />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
