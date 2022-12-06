import React, { useState, useEffect } from "react";
import axios from "axios";

const InquiryContents = ({ tabName, list, openWriteModal, openInquiry }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (list != null && list.length > 0) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [list]);

  return (
    <section id="section-1">
      <div className="mediabox">
        <div className="board-tit">{tabName}</div>
        <div className="board-page">
          TOTAL {list != null && list.length}건 1페이지
        </div>
        <div className="board-list">
          <table>
            <colgroup>
              <col width="5%" />
              <col width="30%" />
              <col width="10%" />
              <col width="15%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>답변여부</th>
                <th>작성자</th>
                <th>날짜</th>
              </tr>
            </thead>
            <tbody>
              {toggle &&
                list.map((item, idx) => (
                  <tr key={idx} onClick={() => openInquiry(item)}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.is_re == 0 ? "미응답" : "답변 완료"}</td>
                    <td>{item.wr_name}</td>
                    {item.created_at != null && (
                      <td>
                        {item.created_at.slice(0, 4)}-
                        {item.created_at.slice(4, 6)}-
                        {item.created_at.slice(6, 8)}
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="write-btn">
        <button onClick={openWriteModal}>글쓰기</button>
      </div>
    </section>
  );
};

export default InquiryContents;
