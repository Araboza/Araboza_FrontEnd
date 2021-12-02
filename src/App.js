import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import * as P from "./Pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<P.Main />} />
        <Route path="/login" element={<P.Login />} />
      </Routes>
    </>
  );
}

export default App;
