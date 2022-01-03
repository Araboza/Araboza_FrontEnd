import React from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG";
import HomeIcon from "@mui/icons-material/Home";
import UploadIcon from "@mui/icons-material/Upload";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { show_user, set_user } from "../../modules/myInfo";
import MyInfoPopup from "../MyInfoPopup";

export default function Header() {
  const dispatch = useDispatch();
  const [userShow, userImg] = useSelector((state) => [
    state.myInfo.show,
    state.myInfo.user.img,
  ]);
  const user_show = () => {
    dispatch(show_user());
    if (!userShow) dispatch(set_user());
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
            <UploadIcon />
          </Link>
          <a className="icon" href="https://github.com/Araboza">
            <GitHubIcon />
          </a>
          <div className="icon my">
            <S.UserImg image={userImg} onClick={user_show} />
            {userShow && <MyInfoPopup />}
          </div>
        </div>
      </div>
    </S.HeaderWrapper>
  );
}
