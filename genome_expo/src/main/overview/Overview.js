import React from "react";

import Review from "./Review.js";
import Reference from "./Reference.js";
import Component from "./Component.js";
import Poster from "./Poster.js";
import Guest from "./Guest.js";
import ExhibitionCenter from "./ExhibitionCenter.js";
import Schedule from "./Schedule.js";
import JoinCompany from "./JoinCompany.js";

import contItem13 from "../../images/cont_item_13_2022_2.png";
import contItem13_en from "../../images/cont_item_13_2022_en_4.png";
import contItem14 from "../../images/cont_item_14.png";
import contItem08 from "../../images/cont_item_08.svg";
import contItem20 from "../../images/cont_item_20.svg";
import contItem22 from "../../images/cont_item_22.svg";
import { t } from "i18next";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Overview = () => {
  return (
    <div>
      <div className="mid-section-wrap-01">
        <div id="about"></div>
        <div className="cnt-section-wrap">
          <div className="mid-section-lft">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInLeft"
            >
              <div className="sect-01-ico">
                {t("lang") == "ko" ? (
                  <img src={contItem13} />
                ) : (
                  <img src={contItem13_en} />
                )}
              </div>
            </AnimationOnScroll>
          </div>
          <div className="mid-section-rgt">
            <Review />
            <Reference />
          </div>
        </div>
        <div className="cnt-section-wrap">
          <div className="mid-section-lft">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInLeft"
            >
              <div className="sect-04-ico">
                <img src={contItem22} />
              </div>
            </AnimationOnScroll>
            <div className="sect-05-ico">
              <img src={contItem20} />
            </div>
          </div>
          <div className="mid-section-rgt">
            <Poster />
          </div>
        </div>
        <div id="overview"></div>
        <Component />
        <div id="schedule"></div>
        <div className="cnt-section-wrap">
          <div className="mid-section-lft">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInLeft"
            >
              <div className="sect-03-ico">
                <img src={contItem14} />
              </div>
            </AnimationOnScroll>
            <div className="sect-02-ico">
              <img src={contItem08} />
            </div>
          </div>
          <Schedule />
        </div>
        <Guest />
        <ExhibitionCenter />
      </div>
      <div className="mid-section-wrap-bg-01">
        <div id="menu-07" />
      </div>
      <div className="mid-section-wrap-02">
        <JoinCompany />
        <div id="menu-08"></div>
      </div>
    </div>
  );
};

export default Overview;
