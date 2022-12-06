import React from "react";
import { t } from "i18next";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Schedule = () => {
  return (
    <div className="mid-section-rgt margin-top-200 margin-btm-200">
      <div className="sect-03-tit-01 sect-tit">
        {t("schedule_title1")}
        <br />
        {t("schedule_title2")}
      </div>
      <div className="sect-03-tbl">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <table>
            <colgroup>
              <col width="38%" />
              <col width="20%" />
              <col width="25%" />
              <col width="13%" />
              <col width="10%" />
            </colgroup>
            <tbody>
              <tr>
                <th rowSpan="8">{t("schedule_date1")}</th>
                <td id="id1">{t("schedule_col1")}</td>
                <td>{t("schedule_col2")}</td>
                <td>{t("schedule_col3")}</td>
                <td>{t("schedule_col4")}</td>
              </tr>
              <tr>
                <td>{t("schedule_exh_title")}</td>
                <td>{t("schedule_exh_cont")}</td>
                <td>{t("schedule_time_900_1800")}</td>
                <td>{t("schedule_place_A")}</td>
              </tr>
              <tr>
                <td>{t("schedule_exp_title")}</td>
                <td>{t("schedule_exp_cont")}</td>
                <td>{t("schedule_time_900_1800")}</td>
                <td>{t("schedule_place_A_exp")}</td>
              </tr>
              <tr>
                <td>{t("schedule_ir_title")}</td>
                <td>
                  {t("schedule_ir_cont1")}
                  <br />
                  {t("schedule_ir_cont2")}
                </td>
                <td>{t("schedule_time_1000_1800")}</td>
                <td>{t("schedule_place_A_bus")}</td>
              </tr>
              <tr>
                <td>{t("schedule_cere_title")}</td>
                <td>
                  {t("schedule_cere_cont1")}
                  <br />
                  {t("schedule_cere_cont2")}
                  <br />
                  {t("schedule_cere_cont3")}
                </td>
                <td>{t("schedule_time_1400_1500")}</td>
                <td>{t("schedule_place_A_main")}</td>
              </tr>
              <tr>
                <td>{t("schedule_lec_title")}</td>
                <td>
                  {t("schedule_lec_cont1")}
                  <br />
                  {t("schedule_lec_cont2")}
                </td>
                <td>{t("schedule_time_1500_1700")}</td>
                <td>{t("schedule_place_A_main")}</td>
              </tr>
              <tr>
                <td>
                  {t("schedule_gr_title1")}
                  <br />
                  {t("schedule_gr_title2")}
                </td>
                <td>
                  {t("schedule_gr_cont1")}
                  <br />
                  {t("schedule_gr_cont2")}
                </td>
                <td>{t("schedule_time_1700_1800")}</td>
                <td>{t("schedule_place_A_main")}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <span className="gray-line">ㅤ</span>
                </td>
              </tr>
              <tr>
                <th rowSpan="9">{t("schedule_date2")}</th>
                <td>{t("schedule_col1")}</td>
                <td>{t("schedule_col2")}</td>
                <td>{t("schedule_col3")}</td>
                <td>{t("schedule_col4")}</td>
              </tr>
              <tr>
                <td>{t("schedule_sem_title")}</td>
                <td>
                  {t("schedule_sem_cont1")}
                  <br />
                  {t("schedule_sem_cont2")}
                  <br />
                  {t("schedule_sem_cont3")}
                </td>
                <td>{t("schedule_time_900_1700")}</td>
                <td>{t("schedule_place_f1_meet")}</td>
              </tr>
              <tr>
                <td>{t("schedule_exh_title")}</td>
                <td>{t("schedule_exh_cont")}</td>
                <td>{t("schedule_time_900_1800")}</td>
                <td>{t("schedule_place_A")}</td>
              </tr>
              <tr>
                <td>{t("schedule_exp_title")}</td>
                <td>{t("schedule_exp_cont")}</td>
                <td>{t("schedule_time_900_1800")}</td>
                <td>{t("schedule_place_A_exp")}</td>
              </tr>
              <tr>
                <td>{t("schedule_main_title")}</td>
                <td>
                  {t("schedule_main_cont1")}
                  <br />
                  {t("schedule_main_cont2")}
                </td>
                <td>{t("schedule_time_1000_1500")}</td>
                <td>{t("schedule_place_A_main")}</td>
              </tr>
              <tr>
                <td>{t("schedule_ir_title")}</td>
                <td>
                  {t("schedule_ir_cont1")}
                  <br />
                  {t("schedule_ir_cont2")}
                </td>
                <td>{t("schedule_time_1000_1800")}</td>
                <td>{t("schedule_place_A_bus")}</td>
              </tr>
              <tr>
                <td>{t("schedule_lec_title")}</td>
                <td>
                  {t("schedule_lec_cont1")}
                  <br />
                  {t("schedule_lec_cont2")}
                </td>
                <td>{t("schedule_time_1500_1700")}</td>
                <td>{t("schedule_place_A_main")}</td>
              </tr>
              <tr>
                <td>
                  {t("schedule_gr_title1")}
                  <br />
                  {t("schedule_gr_title2")}
                </td>
                <td>
                  {t("schedule_gr_cont1")}
                  <br />
                  {t("schedule_gr_cont2")}
                </td>
                <td>{t("schedule_time_1700_1800")}</td>
                <td>{t("schedule_place_A_main")}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <span className="gray-line">ㅤ</span>
                </td>
              </tr>
              <tr>
                <th rowSpan="8">{t("schedule_date3")}</th>
                <td>{t("schedule_col1")}</td>
                <td>{t("schedule_col2")}</td>
                <td>{t("schedule_col3")}</td>
                <td>{t("schedule_col4")}</td>
              </tr>
              <tr>
                <td>{t("schedule_sem_title")}</td>
                <td>
                  {t("schedule_sem_cont1")}
                  <br />
                  {t("schedule_sem_cont2")}
                  <br />
                  {t("schedule_sem_cont3")}
                </td>
                <td>{t("schedule_time_900_1700")}</td>
                <td>{t("schedule_place_f1_meet")}</td>
              </tr>
              <tr>
                <td>{t("schedule_exh_title")}</td>
                <td>{t("schedule_exh_cont")}</td>
                <td>{t("schedule_time_900_1800")}</td>
                <td>{t("schedule_place_A")}</td>
              </tr>
              <tr>
                <td>{t("schedule_exp_title")}</td>
                <td>{t("schedule_exp_cont")}</td>
                <td>{t("schedule_time_900_1800")}</td>
                <td>{t("schedule_place_A_exp")}</td>
              </tr>
              <tr>
                <td>{t("schedule_main_title")}</td>
                <td>
                  {t("schedule_main_cont1")}
                  <br />
                  {t("schedule_main_cont2")}
                </td>
                <td>{t("schedule_time_1000_1500")}</td>
                <td>{t("schedule_place_A_main")}</td>
              </tr>
              <tr>
                <td>{t("schedule_job_title")}</td>
                <td>
                  {t("schedule_job_cont1")}
                  <br />
                  {t("schedule_job_cont2")}
                </td>
                <td>{t("schedule_time_1000_1700")}</td>
                <td>{t("schedule_place_A_bus")}</td>
              </tr>
              <tr>
                <td>{t("schedule_lec_title")}</td>
                <td>
                  {t("schedule_lec_cont1")}
                  <br />
                  {t("schedule_lec_cont2")}
                </td>
                <td>{t("schedule_time_1500_1700")}</td>
                <td>{t("schedule_place_A_main")}</td>
              </tr>
              <tr>
                <td>
                  {t("schedule_gr_title1")}
                  <br />
                  {t("schedule_gr_title2")}
                </td>
                <td>
                  {t("schedule_gr_cont1")}
                  <br />
                  {t("schedule_gr_cont2")}
                </td>
                <td>{t("schedule_time_1700_1800")}</td>
                <td>{t("schedule_place_A_main")}</td>
              </tr>
            </tbody>
          </table>
        </AnimationOnScroll>
        <script>
          document.getElementById('id1').style.backgroundColor='#003F87';
        </script>
      </div>
      <div id="menu-05"></div>
    </div>
  );
};

export default Schedule;
