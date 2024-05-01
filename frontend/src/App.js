import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import ReadUser from "./component/ReadUser";
import UpdateUser from "./component/UpdateUser";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/readuser/:id' element={<ReadUser />} />
      <Route path='/updateuser/:id' element={<UpdateUser />} />
    </Routes>
  );
}
