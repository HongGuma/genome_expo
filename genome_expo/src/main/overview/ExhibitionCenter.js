import React from "react";

import mainMap from "../../images/main_map_part1.png";
import detailMap from "../../images/main_map_part2.png";

const ExhibitionCenter = () => {
  return (
    <div className="cnt-section-wrap">
      <div className="mid-section-rgt">
        <div className="sect-05-tit-01 sect-tit">
          전시장
          <br />
          안내
        </div>
        <div className="sect-05-img-01">
          <img src={mainMap} />
        </div>
        <div className="sect-05-img-01">
          <img src={detailMap} />
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCenter;
