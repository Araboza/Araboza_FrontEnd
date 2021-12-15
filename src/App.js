import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { set_show } from "./modules/notice";
import * as P from "./Pages";

function App() {
  const show = useSelector((state) => state.notice.show);
  const dispatch = useDispatch();
  const onClick = () => dispatch(set_show());

  return (
    <>
      {show && <div onClick={onClick} className="notice-close"></div>}
      <Routes>
        <Route path="/" element={<P.Main />} />
        <Route path="/login" element={<P.Login />} />
      </Routes>
    </>
  );
}

export default App;
