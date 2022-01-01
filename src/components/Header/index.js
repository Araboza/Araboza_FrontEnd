import React from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import UploadIcon from "@mui/icons-material/Upload";
import { Link } from "react-router-dom";
import Notification from "../Notification";
import { useDispatch, useSelector } from "react-redux";
import { set_notice, set_show } from "../../modules/notice";
import { show_user, set_user } from "../../modules/myInfo";
import MyInfoPopup from "../MyInfoPopup";

export default function Header() {
  const dispatch = useDispatch();
  const [noticeShow, userShow, userImg] = useSelector((state) => [
    state.notice.show,
    state.myInfo.show,
    state.myInfo.user.img,
  ]);
  const show_notice = () => {
    dispatch(set_show());
    if (!noticeShow) dispatch(set_notice(1));
  };
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
          <div className="notification">
            <div className="icon" onClick={show_notice}>
              <NotificationsNoneIcon />
            </div>
            {noticeShow && <Notification />}
          </div>
          <div className="icon my">
            <S.UserImg image={userImg} onClick={user_show} />
            {userShow && <MyInfoPopup />}
          </div>
        </div>
      </div>
    </S.HeaderWrapper>
  );
}
