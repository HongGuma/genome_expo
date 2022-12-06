import React from "react";

import contItem05 from "../../images/cont_item_05.svg";

const Guest = () => {
  return (
    <div className="cnt-section-wrap">
      <div className="mid-section-rgt margin-btm-200">
        <div className="sect-04-tit-01 sect-tit">
          연사
          <br />
          소개
        </div>
        <div className="sect-04-cont-box">
          <div className="sect-04-img-01">
            <img src={contItem05} />
          </div>
          <div className="sect-04-txt-01">
            Prediction of phenotype from
            <br />
            genomic variation in proteins
            <br />
            <span>8.28.(토) 15:10~16:10</span>
          </div>
        </div>
        <div className="sect-04-txt-02">
          Julian Gough
          <br />
          <span>소속 : MRC Laboratory of Molecular Biology</span>
        </div>
        <div className="sect-04-txt-03">
          <div className="tit">주요 활동</div>
          <p>
            University of Bristol 교수
            <br />
            Tokyo Medical and Dental University 부교수
            <br />
            Pasteur Institute in Paris 방문교수
            <br />
            Cambridge University 박사
            <br />
            University of Bristol 수학 및 물리학 학사
          </p>
        </div>
        <div id="menu-06"></div>
      </div>
    </div>
  );
};

export default Guest;
