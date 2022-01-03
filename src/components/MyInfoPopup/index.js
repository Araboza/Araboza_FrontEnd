import React from "react";
import * as S from "./style";
import { logoutUser } from "../../modules/user";
import { show_user } from "../../modules/myInfo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UploadIcon from "@mui/icons-material/Upload";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function MyInfoPopup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    user: state.myInfo.user,
  }));
  const close = () => dispatch(show_user());
  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <S.PopupWrapper>
      <div className="user">
        <S.UserImg image={user.img} />
        <div>
          <div className="username">{user.id}</div>
          <div className="major">
            {user.major[0] ? (
              user.major.map((i) => <span>#{i}</span>)
            ) : (
              <span>전공이 없습니다</span>
            )}
          </div>
        </div>
        <div />
      </div>
      <hr />
      <div className="navigation">
        <section>
          <AccountCircleIcon />
          <Link onClick={close} to={`/@${user.id}`}>
            내 정보
          </Link>
        </section>
        <section>
          <UploadIcon />
          <Link onClick={close} to="/add">
            업로드
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
