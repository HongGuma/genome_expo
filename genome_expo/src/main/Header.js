import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import logo from "../images/logo_complex_2.svg";

const Header = ({ scrollY }) => {
  const { t, i18n } = useTranslation();
  function changeToKo() {
    i18n.changeLanguage("ko-KR");
  }
  function changeToEn() {
    i18n.changeLanguage("en-US");
  }
  return (
    <header id={scrollY > 200 ? "header-wrap-scroll" : "header-wrap"}>
      <div id="header-line"></div>
      <div className="header">
        <div className="gnb-wrap">
          <div className="m-btn">
            <button id="showRight">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div class="main-logo-01">
          <a href="/">
            <img src={logo} />
          </a>
        </div>

        <nav
          className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right"
          id="cbp-spmenu-s2"
        >
          <ul className="gnb-menu">
            <li>
              <a href="/#about">{t("header_title")}</a>
              <ul className="gnb-menu-in">
                <li>
                  <a href="/#about">{t("header_intro")}</a>
                </li>
                <li>
                  <a href="/#overview">{t("header_component")}</a>
                </li>
                <li>
                  <a href="/#schedule">{t("header_date")}</a>
                </li>
                <li>
                  <a href="#menu-05">연사소개</a>
                </li>
                <li>
                  <a href="#menu-06">전시장 안내</a>
                </li>
                <li>
                  <a href="#menu-07">참여기업</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#menu-08">관람객 사전 등록</a>
            </li>
            <li>
              <a href="#menu-09">게시판</a>
              <ul className="gnb-menu-in">
                <li>
                  <a href="#section-1">공지사항</a>
                </li>
                <li>
                  <a href="#section-1">Press</a>
                </li>
                <li>
                  <a href="#section-1">Photo</a>
                </li>
                <li>
                  <a href="#section-1">문의</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/directions">{t("header_howto_come")}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="gnb-menu-bg"></div>
      <div className="i18n-toggle">
        <button onClick={changeToKo}>한국어</button>/
        <button onClick={changeToEn}>English</button>
      </div>
    </header>
  );
};

export default Header;
