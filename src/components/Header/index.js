import React from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Notification from "../Notification";
import { useDispatch, useSelector } from "react-redux";
import { set_notice, set_show } from "../../modules/notice";

export default function Header() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.notice.show);
  const show_notice = () => dispatch(set_show());
  const newNotice = () => {
    // setNotice action이 먼저 실행되어서 flase일 때
    if (!show) dispatch(set_notice(1));
  };

  return (
    <S.HeaderWrapper>
      <div className="space"></div>
      <Link to="/" className="logo">
        <I.LogoSVG />
      </Link>
      <div className="menu">
        <div className="icons">
          <Link className="icon" to="/">
            <HomeIcon />
          </Link>
          <Link className="icon" to="/add">
            <AddIcon />
          </Link>
          <div className="notification">
            <div className="icon" onClick={show_notice}>
              <NotificationsNoneIcon onClick={newNotice} />
            </div>
            {show && <Notification />}
          </div>
          <div className="icon">
            <S.UserImg image="./Teemo.jpg" />
          </div>
        </div>
      </div>
    </S.HeaderWrapper>
  );
}
