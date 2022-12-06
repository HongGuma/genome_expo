import { t } from "i18next";
import React from "react";

import contIcon01 from "../../images/cont_ico_01.svg";
import contIcon02 from "../../images/cont_ico_02.svg";
import contItem02 from "../../images/cont_item_02.svg";

const Reference = () => {
  return (
    <section>
      <div className="sect-01-box-02" id="menu-02">
        <div className="sect-01-img-02">
          <img src={contItem02} />
        </div>
        <div className="sect-01-tit-02 sect-tit">{t("reference_title")}</div>
        <div className="sect-01-txt-02">
          <p>{t("reference_manage")}</p>
          <p>{t("reference_auspice")}</p>
          <p>{t("reference_contact")}</p>
        </div>
        <div className="sect-01-txt-03">
          <p className="sect-01-tel">
            <span className="cont-picto">
              <img src={contIcon01} />
            </span>
            +82.052.217.2567
          </p>
          <p className="sect-01-main">
            <span className="cont-picto">
              <img src={contIcon02} />
            </span>
            <a href="mailto:info@genomeexpo.ga">info@genomeexpo.ga</a>
          </p>
        </div>
        <div id="menu-03"></div>
      </div>
    </section>
  );
};

export default Reference;
