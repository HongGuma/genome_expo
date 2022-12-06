import React from "react";
import { t } from "i18next";

import footImg from "../images/foot_img_2022.svg";

const Footer = () => {
  return (
    <footer id="footer-wrap">
      <div className="footer">
        <div className="foot-logo">
          <img src={footImg} />
        </div>
        <div className="add">
          <p className="add-01">{t("footer_title")}</p>
          <p className="tel">TEL : 052-217-2597</p>
          <p className="fax"></p>
          <p className="mail">E-MAIL : genomebioexpo@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
