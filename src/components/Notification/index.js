import React from "react";
import * as S from "./style";

export default function Notification() {
  return (
    <>
      <S.NotificationWrapper>
        <h3>알림</h3>
        <hr />
        <div className="notice">
          <h5>title</h5>
          <p>description</p>
          <div>
            <img src="/Teemo.jpg" alt="post_image" />
          </div>
        </div>
        <div className="notice">
          <h5>title</h5>
          <p>description</p>
          <div>
            <img src="/Teemo.jpg" alt="post_image" />
          </div>
        </div>
        <div className="notice">
          <h5>title</h5>
          <p>description</p>
          <div>
            <img src="/Teemo.jpg" alt="post_image" />
          </div>
        </div>
        <div className="notice">
          <h5>title</h5>
          <p>description</p>
          <div>
            <img src="/Teemo.jpg" alt="post_image" />
          </div>
        </div>
        <div className="notice">
          <h5>title</h5>
          <p>description</p>
          <div>
            <img src="/Teemo.jpg" alt="post_image" />
          </div>
        </div>
      </S.NotificationWrapper>
    </>
  );
}
