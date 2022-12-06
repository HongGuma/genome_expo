import React from "react";
import { t } from "i18next";

import Transport from "./Transport";

const Direction = () => {
  return (
    <div className="mid-section-wrap-01">
      <div id="menu-10"></div>
      <div className="cnt-section-wrap">
        <div className="mid-section-cnt margin-btm-100">
          <div className="sect-09-tit-01 sect-tit">{t("direction_title")}</div>
          <div className="sect-09-cont-wrap">
            <div className="sect-09-map-box">
              <p className="map-add">{t("direction_address")}</p>
              <div className="map">
                <iframe
                  src={t("direction_map_site")}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <Transport />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
r;
