import React from "react";
import { t } from "i18next";

import "animate.css/animate.min.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

import contItem03 from "../../images/cont_item_03_2022.svg";
import contItem13_en from "../../images/cont_item_03_2022_en.svg";
import contItem02 from "../../images/cont_item_02.svg";

const Component = () => {
  return (
    <div className="cnt-section-wrap">
      <div className="mid-section-lft">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <div className="sect-03-ico">
            <img src={contItem02} />
          </div>
        </AnimationOnScroll>
      </div>
      <div className="mid-section-rgt">
        <div className="sect-02-tit-01 sect-tit">
          {t("component_title1")}
          <br />
          {t("component_title2")}
        </div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <div className="sect-02-img-01">
            {t("lang") === "ko" ? (
              <img src={contItem03} />
            ) : (
              <img src={contItem13_en} />
            )}
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Component;
