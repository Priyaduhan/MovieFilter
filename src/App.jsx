import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Adult from "./components/Adult";
import ChildrenComp from "./components/ChildrenComp";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Redirect from "./components/Redirect";
import ChildRedirect from "./components/ChildRedirect";
import FormHandle from "./components/FormHandle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormHandle />}></Route>
        <Route path="/children" element={<ChildrenComp />}></Route>
        <Route path="/adult" element={<Adult />}></Route>
        <Route path="/adult/:childId" element={<Redirect />}></Route>
        <Route path="/children/:childId" element={<ChildRedirect />}></Route>
      </Routes>
      {/* <Navbar />
      <Card movieList={movieList}></Card> */}

      
    </>
  );
}

export default App;
