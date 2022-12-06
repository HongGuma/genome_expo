import React from "react";

import contItem01 from "../../images/cont_item_01_2022.svg";
import { FaDna } from "react-icons/fa";
import { t } from "i18next";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Review = () => {
  return (
    <section>
      <div className="sect-01-box-01">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <div className="sect-01-img-01">
            <img src={contItem01} />
          </div>
          <div className="sect-01-tit-01">{t("review_title")}</div>
        </AnimationOnScroll>
        <div className="sect-01-txt-01">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
            {t("review_context1")}
            <br />
            {t("review_context2")}
          </AnimationOnScroll>

          <br />
          <br />
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
            <FaDna /> {t("review_summary1")}
            <br />
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
            <FaDna /> {t("review_summary2")}
            <br />
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
            <FaDna /> {t("review_summary3")}
            <br />
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
            <FaDna /> {t("review_summary4")}
          </AnimationOnScroll>
        </div>
      </div>
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
        <div className="sect-01-vod-box">
          <iframe
            src="https://www.youtube.com/embed/RQOQYTZSedg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Review;
