import React, { useState } from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Notification from "../Notification";

export default function Header() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);
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
