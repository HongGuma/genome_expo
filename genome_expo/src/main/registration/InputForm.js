import React from "react";

import contIcon01 from "../../images/cont_ico_01.svg";
import contIcon02 from "../../images/cont_ico_02.svg";
import contIcon03 from "../../images/cont_ico_03.svg";

const InputForm = ({ inputHandler }) => {
  return (
    <div className="sect-07-cont-02">
      <ul>
        <li>
          <span className="cont-picto">
            <img src={contIcon03} />
          </span>
        </li>
        <li>이름</li>
        <li>
          <input type="text" name="name" onChange={(e) => inputHandler(e)} />
        </li>
      </ul>
      <ul>
        <li>
          <span className="cont-picto">
            <img src={contIcon03} />
          </span>
        </li>
        <li>소속</li>
        <li>
          <input type="text" name="belong" onChange={(e) => inputHandler(e)} />
        </li>
      </ul>
      <ul>
        <li>
          <span className="cont-picto">
            <img src={contIcon01} />
          </span>
        </li>
        <li>휴대전화번호</li>
        <li>
          <input type="text" name="phone" onChange={(e) => inputHandler(e)} />
        </li>
      </ul>
      <ul>
        <li>
          <span className="cont-picto">
            <img src={contIcon02} />
          </span>
        </li>
        <li>이메일</li>
        <li>
          <input type="text" name="email" onChange={(e) => inputHandler(e)} />
        </li>
      </ul>
    </div>
  );
};

export default InputForm;
