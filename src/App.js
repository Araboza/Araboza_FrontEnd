import React from "react";
import { Routes, Route } from "react-router-dom";
import * as P from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/login" element={<P.Login />} />
    </Routes>
  );
}

export default App;
