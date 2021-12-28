import React from "react";
import { useSelector } from "react-redux";
import * as S from "./style";

export default function Notification() {
  const { notice, error } = useSelector((state) => ({
    notice: state.notice.notice,
    error: state.notice.error,
  }));

  return (
    <>
      <S.NotificationWrapper>
        <h3>알림</h3>
        <hr />
        {notice &&
          notice.map((i, idx) => (
            <div key={idx}>
              <h1>선채훈 바보</h1>
            </div>
          ))}
        {error && <h1>{error.message}</h1>}
      </S.NotificationWrapper>
    </>
  );
}
