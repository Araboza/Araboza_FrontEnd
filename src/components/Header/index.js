import React from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Notification from "../Notification";
import { useDispatch, useSelector } from "react-redux";
import { set_show } from "../../modules/notice";

export default function Header() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.notice.show);
  const onClick = () => dispatch(set_show());
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
            <div className="icon" onClick={onClick}>
              <NotificationsNoneIcon />
            </div>
            {show && <Notification />}
          </div>
          <Link className="icon" to="/my">
            <S.UserImg image="./Teemo.jpg" />
          </Link>
        </div>
      </div>
    </S.HeaderWrapper>
  );
}
