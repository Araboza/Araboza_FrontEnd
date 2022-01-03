import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { set_show } from "./modules/notice";
import { show_user } from "./modules/myInfo";
import * as P from "./Pages";

function App() {
  const [noticeShow, userShow, cookie] = useSelector((state) => [
    state.notice.show,
    state.myInfo.show,
    state.user.cookie,
  ]);
  const dispatch = useDispatch();
  const onClick = () => {
    if (noticeShow) dispatch(set_show());
    if (userShow) dispatch(show_user());
  };

  if (cookie) {
    return (
      <>
        {(noticeShow || userShow) && (
          <div onClick={onClick} className="notice-close" />
        )}
        <Routes>
          <Route path="/" element={<P.Main />} />
          <Route path="/add" element={<P.Add />} />
          <Route path="/@:user/:post" element={<P.Portfolio />} />
          <Route path="/my" element={<P.My />} />
          <Route path="/mylike" element={<P.LikePage />} />
          <Route path="/edit/@:user/:post" element={<P.Edit />} />
          <Route path="*" element={<P.NotFound />} />
        </Routes>
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<P.Login />} />
      <Route path="*" element={<P.NotFound />} />
    </Routes>
  );
}

export default App;
