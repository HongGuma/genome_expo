import React from "react";
import { useTranslation } from "react-i18next";
import top_icon from "../../images/main_top_ico_02.svg";

const MainLogo = () => {
  const { t } = useTranslation();
  var today = new Date();
  var dday = new Date(2022, 8, 22);
  var gap = dday.getTime() - today.getTime();
  var result = Math.ceil(gap / (1000 * 60 * 60 * 24));

  return (
    <div className="top-section-wrap">
      <div className="main-visual">
        <div className="top-cont-sect">
          <div className="top-cont-txt-box">
            <div className="top-cont-ico-01">
              <img src={top_icon} />
            </div>
            <p className="top-cont-txt-01">REGISTER</p>
            <div className="top-cont-btn">
              <a href="">
                {t("mainlogo_preregi")} <br /> {t("mainlogo_preregi_ready")}
              </a>
            </div>
            {/* TODO: 날짜 및 D-day 수정 */}
            <p className="top-cont-txt-02">D - {result}</p>
            <p className="top-cont-txt-01">
              {t("startDate")}
              <br />
              {t("ulsanExhibition")}
            </p>
            <p className="top-cont-txt-01">
              {t("mainlogo_date")}
              <br />
              {t("mainlogo_place")}
            </p>
            <div class="mouse">
              <div class="wheel"></div>
            </div>
            <div>
              <span class="mousecls unu"></span>{" "}
              <span class="mousecls doi"></span>{" "}
              <span class="mousecls trei"></span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div id="menu-01"></div>
    </div>
  );
};

export default MainLogo;
