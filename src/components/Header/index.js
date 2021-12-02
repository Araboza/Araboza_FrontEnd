import React from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";

export default function Header() {
  return (
    <S.HeaderWrapper>
      <div className="space"></div>
      <div className="logo">
        <I.LogoSVG />
      </div>
      <div className="menu">
        <div className="icons">
          <div>
            <HomeIcon />
          </div>
          <div>
            <AddIcon />
          </div>
          <div>
            <NotificationsNoneIcon />
          </div>
          <div>
            <PersonIcon />
          </div>
        </div>
      </div>
    </S.HeaderWrapper>
  );
}
