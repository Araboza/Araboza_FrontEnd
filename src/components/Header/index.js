import React from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.HeaderWrapper>
      <div className="space"></div>
      <Link to="/" className="logo">
        <I.LogoSVG />
      </Link>
      <div className="menu">
        <div className="icons">
          <Link to="/">
            <HomeIcon />
          </Link>
          <Link to="/add">
            <AddIcon />
          </Link>
          <div>
            <NotificationsNoneIcon />
          </div>
          <Link to="/my">
            <S.UserImg image="./Teemo.jpg"></S.UserImg>
          </Link>
        </div>
      </div>
    </S.HeaderWrapper>
  );
}
