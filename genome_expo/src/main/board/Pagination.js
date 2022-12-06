import React, { useState, useEffect } from "react";

const Pagination = ({ total, numClick }) => {
  const page = 6;
  const [curPage, setCurPage] = useState(1);
  const idxOfLast = curPage * page;
  const idxOfFirst = idxOfLast - page;
  const numbering = [];
  for (var i = 1; i <= Math.ceil(total / page); i++) {
    numbering.push(i);
  }
  return (
    <div className="board-paging">
      <a>◀</a>
      {numbering.map((el) => (
        <a key={el} onClick={() => numClick(el)}>
          {el}
        </a>
      ))}
      <a>▶</a>
    </div>
  );
};

export default Pagination;
