import React from "react";
import * as S from "./style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UploadIcon from "@mui/icons-material/Upload";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";

export default function MyInfoPopup() {
  return (
    <S.PopupWrapper>
      <div className="user">
        <div className="userImg"></div>
        <div>
          <div className="username">Teemo</div>
          <div className="major">#FrontEnd</div>
        </div>
        <div />
      </div>
      <hr />
      <div className="navigation">
        <section>
          <AccountCircleIcon />
          <span>내 정보</span>
        </section>
        <section>
          <UploadIcon />
          <span>업로드</span>
        </section>
        <section>
          <FavoriteBorderIcon />
          <span>좋아요 한 프로젝트</span>
        </section>
        <section className="logout">
          <LogoutIcon />
          <span>로그아웃</span>
        </section>
      </div>
    </S.PopupWrapper>
  );
}
