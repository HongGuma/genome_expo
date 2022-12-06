import React from "react";

import contIcon01 from "../../images/cont_ico_01.svg";
import contItem10 from "../../images/cont_item_10.svg";

//사무국 연락처
const Contact = () => {
  return (
    <div className="mid-section-wrap-01">
      <div className="cnt-section-wrap margin-btm-200">
        <div className="mid-section-rgt-02">
          <div className="sect-10-img-01">
            <img src={contItem10} />
          </div>
          <div className="sect-10-cont-box">
            <div className="sect-10-tit-01">
              사무국
              <br />
              연락처
            </div>
            <div className="sect-10-txt-01">
              UNIST 게놈산업기술센터 게놈코리아사무국
            </div>
            <div className="sect-10-txt-02">
              <p className="sect-10-tel">
                <span className="cont-picto">
                  <img src={contIcon01} />
                </span>{" "}
                052-217-????
              </p>
              <p className="sect-10-mail">
                <span className="cont-picto">
                  <img src={contIcon01} />
                </span>
                E-Mail:{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
