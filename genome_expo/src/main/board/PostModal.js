import React, { useState, useEffect } from "react";

import contItem01 from "../../images/cont_item_01.svg";

import "../../css/board.css";

const PostModal = ({ tabName, closePopup, post }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (post != null) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [post]);
  return (
    <section className="section-2">
      <div className="sect-01">
        <div className="close-btn">
          <button className="close" onClick={closePopup}>
            x
          </button>
        </div>
        <div className="cont-01">
          <div className="post-tit">
            <h3>
              <span>{tabName}</span>
            </h3>
          </div>
          <div>
            <img src={contItem01} />
          </div>
        </div>
        {toggle ? (
          <div className="cont-02">
            <p> {post.title} </p>
            <p> {post.writer} </p>
            <p> {post.created_at.slice(0, 10)} </p>
            <p> 조회 : {post.read_cnt} </p>
          </div>
        ) : (
          <div className="cont-02">
            <div>알 수 없음</div>
            <div>알 수 없음</div>
            <div>0000-00-00</div>
            <div>null</div>
          </div>
        )}
        <div className="cont-03">
          <p>첨부파일</p>
          <span>아이콘</span>
        </div>
        {toggle ? (
          <div className="cont-04">{post.contents}</div>
        ) : (
          <div>비어 있음</div>
        )}
        <div className="cont-05">
          <p>다음글</p>
          <span>다음글 제목</span>
        </div>
        <div className="close-btn">
          <button className="menu" onClick={closePopup}>
            목록
          </button>
        </div>
      </div>
    </section>
  );
};

export default PostModal;
