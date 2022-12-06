//참관신청확인

import React, { useState, useEffect } from "react";
import axios from "axios";

import contItem01 from "../../images/cont_item_01.svg";

const CheckingModal = ({ closeChecking }) => {
  const [resultList, setResultList] = useState(null); //조회 결과
  const [infoToggle, setInfoToggle] = useState(false); //조회 결과 토글
  const [nameNotiToggle, setNameNoti] = useState(false); //이름 비어있 다고 알림 토글
  const [phoneNotiToggle, setPhoneNoti] = useState(false); //폰번호 비 어있다고 알림 토글
  const [notMatchToggle, setNotMatch] = useState(false); //일치하는 정 보 없다고 알림 토글
  const [wrongToggle, setWrongToggle] = useState(false); //이름/폰번호 틀렸다고 알림 토글
  const [inputValue, setInputValue] = useState({ name: "", phone: "" }); //input에서 입력 받을 데이터
  const { name, phone } = inputValue; //비구조화할당 (inputValue.name 처 럼 써야할거 그냥 name만 쓰게)
  /**
   * 사용자 참관 정보 불러오기
   * @returns {Promise<*>} 결과값
   */
  async function loadInfo() {
    const res = await axios.post(
      process.env.REACT_APP_API + "/events/load/checking",
      { u_name: name, u_phone: phone }
    );
    return res.data;
  }

  /**
   * 확인 버튼 눌렀을때
   */
  function onSubmit() {
    setNotMatch(false);
    setWrongToggle(false);
    if (inputNoti()) {
      loadInfo().then((res) => {
        // console.log(res);
        if (res == "-1" || res == null) {
          //에러
          alert(
            "죄송합니다. 문제가 발생했습니다. 문의처:052)xxx-xxxx에 문의해주십시오."
          );
        } else if (res == "-2") {
          //일치하는 정보 없음
          setNotMatch(true);
        } else if (res == "-3") {
          //입력 정보 틀림
          setWrongToggle(true);
        } else {
          setResultList(res);
          setInfoToggle(true);
        }
      });
    }
  }

  function inputNoti() {
    if (name == "" && phone == "") {
      setNameNoti(true);
      setPhoneNoti(true);
      return false;
    } else if (name != "" && phone == "") {
      setNameNoti(false);
      setPhoneNoti(true);
      return false;
    } else if (name == "" && phone != "") {
      setNameNoti(true);
      setPhoneNoti(false);
      return false;
    } else if (name != "" && phone != "") {
      setNameNoti(false);
      setPhoneNoti(false);
      return true;
    }
  }

  function onChangeValue(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }
  function onCancel() {
    closeChecking();
  }

  return (
    <div className="sect-07-cont-04">
      <div className="cont-04-inner">
        <div className="close">
          <button onClick={closeChecking}>x</button>
        </div>
        <div className="img-wrap">
          <p>
            <img src={contItem01} alt="Genome Expo 2021" />
          </p>
        </div>
        {infoToggle ? (
          <ResultOfChecking onCancel={onCancel} resultList={resultList} />
        ) : (
          <div className="info-check">
            <div className="sect-01">
              <div className="input-wrap">
                <div className="input-container">
                  <div className="input-box">
                    <span>이름</span>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => onChangeValue(e)}
                    />
                  </div>
                  {nameNotiToggle && (
                    <div className="error-null">
                      <span>*이름을 입력해주세요.</span>
                    </div>
                  )}
                </div>
                <div className="input-container">
                  <div className="input-box">
                    <span>전화번호</span>
                    <input
                      type="text"
                      name="phone"
                      onChange={(e) => onChangeValue(e)}
                    />
                  </div>
                  {phoneNotiToggle && (
                    <div className="error-null">
                      <span>*전화번호를 입력해주세요.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="error-not-match">
              {notMatchToggle && (
                <span>
                  *일치하는 정보가 없습니다. 입력한 정보를 확인해주세요.
                </span>
              )}
              {wrongToggle && (
                <span>*이름 또는 전화번호가 일치 하지 않습니다. </span>
              )}
            </div>
            <div className="sect-02">
              <button onClick={onCancel}>취소</button>
              <button onClick={onSubmit}>확인</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ResultOfChecking = ({ onCancel, resultList }) => {
  const [eventDate, setEventDate] = useState(null);

  useEffect(() => {
    loadEventDate().then((res) => {
      if (res != null) {
        setEventDate(res);
      }
    });
  }, []);

  async function loadEventDate() {
    const res = await axios.post(
      process.env.REACT_APP_API + "/events/eventDate"
    );
    return res.data;
  }

  const EventList = ({ no, date, events }) => {
    return (
      <ul>
        {date}
        {events != null &&
          events.map((el, idx) =>
            no == el.e_date ? <li key={idx}>{el.e_name}</li> : null
          )}
      </ul>
    );
  };

  return (
    <div className="container-content">
      <div className="parti-header">
        <div className="sect-01">
          <div>이름:</div>
          <div>{resultList.user_nm}</div>
        </div>
        <div className="sect-01">
          <div>소속:</div>
          <div>{resultList.user_belong}</div>
        </div>
        <div className="sect-01">
          <div>전화번호:</div>
          <div>{resultList.user_ph}</div>
        </div>
        <div className="sect-01">
          <div>이메일</div>
          <div>{resultList.user_email}</div>
        </div>
      </div>
      <div className="parti-content">
        <div>참관행사</div>
        {eventDate == null ? (
          <div className="parti-event">not founded data</div>
        ) : (
          <div className="parti-event">
            {eventDate.map((item, idx) => (
              <EventList
                no={item.no}
                date={item.e_date_kr}
                events={resultList.events}
                key={idx}
              />
            ))}
          </div>
        )}
      </div>
      <div className="parti-footer">
        <button onClick={onCancel}>나가기</button>
      </div>
    </div>
  );
};

export default CheckingModal;
