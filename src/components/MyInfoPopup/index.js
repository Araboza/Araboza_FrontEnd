import React from "react";
import * as S from "./style";
import { logoutUser } from "../../modules/user";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UploadIcon from "@mui/icons-material/Upload";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { set_like } from "../../modules/myInfo";

export default function MyInfoPopup() {
  const dispatch = useDispatch();
  const close = () => dispatch(set_like());
  const logout = () => {
    dispatch(logoutUser());
    close();
  };

  return (
    <S.PopupWrapper>
      <div className="user">
        <S.UserImg image={"/Teemo.jpg"} />
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
          <Link onClick={close} to="/my">
            내 정보
          </Link>
        </section>
        <section>
          <UploadIcon />
          <Link onClick={close} to="/add">
            업로드
          </Link>
        </section>
        <section>
          <FavoriteBorderIcon />
          <Link onClick={close} to="/mylike">
            좋아요 한 프로젝트
          </Link>
        </section>
        <section onClick={logout} className="logout">
          <LogoutIcon />
          <span>로그아웃</span>
        </section>
      </div>
    </S.PopupWrapper>
  );
}
