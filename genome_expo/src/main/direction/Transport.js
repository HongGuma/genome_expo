import React, { useState, useEffect } from "react";

import ShareIco from "../../images/share_icon.png";
import arrowIcon from "../../images/arrow_ico.png";
import { t } from "i18next";

const Transport = () => {
  function onClickHref(url) {
    window.open(url);
  }
  return (
    <div className="transport">
      <div className="trns-sect-01">
        <div className="trns-cont-01">
          <p className="trns-cont-01-tit">{t("transport_airport_title")}</p>
          <p className="trns-cont-01-txt">{t("transport_airport_descr")}</p>
          <div className="trns-cont-box">
            <a>{t("transport_airport_taxi")}</a>
            <a href="http://naver.me/FgO7eqyS" target="_blank">
              {t("transport_airport_car")} <img src={ShareIco} />
            </a>
            <a href="http://naver.me/FdEmPkqo" target="_blank">
              {t("transport_airport_bus")} <img src={ShareIco} />
            </a>
          </div>
        </div>
        <div className="trns-cont-02">
          <p className="trns-cont-01-tit">{t("transport_train_title")}</p>
          <p className="trns-cont-01-txt">{t("transport_train_descr")}</p>
          <div className="trns-cont-box">
            <a>{t("transport_train_taxi")}</a>
            <a href="http://naver.me/5L3m6de0" target="_blank">
              {t("transport_train_walk")} <img src={ShareIco} />
            </a>
            <a href="http://naver.me/GI6Nc9l9" target="_blank">
              {t("transport_train_bus")} <img src={ShareIco} />
            </a>
          </div>
        </div>
        <div className="trns-cont-01">
          <p className="trns-cont-01-tit">{t("transport_bus_title")}</p>
          <p className="trns-cont-01-txt">{t("trnasport_bus_descr")}</p>
          <div className="trns-cont-box">
            <a>{t("transport_bus_taxi")}</a>
            <a href="http://naver.me/Gq136xED" target="_blank">
              {t("transport_bus_car")} <img src={ShareIco} />
            </a>
            <a href="http://naver.me/FwkdyMK8" target="_blank">
              {t("transport_bus_bus")} <img src={ShareIco} />
            </a>
          </div>
        </div>
      </div>
      <div className="trns-sect-02">
        <div className="trns-cont-03">
          <p className="trns-cont-01-tit">
            {t("transport_other_airport_title")}
          </p>
          <p className="trns-cont-01-txt">
            {t("transport_other_airport_descr")}
          </p>
          <div className="trns-cont-02-box">
            <ul>
              <p>
                {t("transport_other_airport_incheon_title1")}{" "}
                <span>
                  <img src={arrowIcon} width="25px" height="25px" />
                </span>
                {t("transport_other_airport_incheon_title2")}
              </p>
              <li>{t("transport_other_airport_incheon_cont1")}</li>
              <li>{t("transport_other_airport_incheon_cont2")}</li>
              <li>{t("transport_other_airport_incheon_cont3")}</li>
              <li>{t("transport_other_airport_incheon_cont4")}</li>
            </ul>
            <ul>
              <p>
                {t("transport_other_airport_gimpo_title1")}{" "}
                <span>
                  <img src={arrowIcon} width="25px" height="25px" />
                </span>{" "}
                {t("transport_other_airport_gimpo_title2")}
              </p>
              <li>{t("transport_other_airport_gimpo_cont1")}</li>
              <li>{t("transport_other_airport_gimpo_cont2")}</li>
            </ul>
            <ul>
              <p>
                {t("transport_other_airport_jeju_title1")}{" "}
                <span>
                  <img src={arrowIcon} width="25px" height="25px" />
                </span>{" "}
                {t("transport_other_airport_jeju_title2")}
              </p>
              <li>{t("transport_other_airport_jeju_cont1")}</li>
              <li>{t("transport_other_airport_jeju_cont2")}</li>
            </ul>
            <ul>
              <p>
                {t("transport_other_airport_gimhae_title1")}{" "}
                <span>
                  <img src={arrowIcon} width="25px" height="25px" />
                </span>{" "}
                {t("transport_other_airport_gimhae_title2")}
              </p>
              <li>
                <a href="http://www.taehwaairport.co.kr/" target="_blank">
                  {t("transport_other_airport_gimhae_cont1")}{" "}
                  <img src={ShareIco} />
                </a>
              </li>
              <li>{t("transport_other_airport_gimhae_cont2")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
r;
