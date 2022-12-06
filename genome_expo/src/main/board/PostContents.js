import React, { useState, useEffect } from "react";

const PostContents = ({ tabName, list, openPopup }) => {
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
                <th>작성자</th>
                <th>날짜</th>
                <th>조회</th>
              </tr>
            </thead>
            <tbody>
              {toggle &&
                list.map((item, idx) => (
                  <tr key={idx} onClick={() => openPopup(item)}>
                    <td>{item.no}</td>
                    <td>{item.title}</td>
                    <td>{item.writer}</td>
                    {item.created_at != null && (
                      <td>{item.created_at.slice(0, 10)}</td>
                    )}
                    <td>{item.read_cnt}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PostContents;
