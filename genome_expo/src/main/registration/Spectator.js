import React, { useState, useEffect } from "react";
import axios from "axios";

import CheckingModal from "./CheckingModal.js";
import InputForm from "./InputForm.js";
import EventList from "./EventList.js";

const Spectator = () => {
  const evnetTerm = ["9월 1일 목요일", "9월 2일 금요일", "9월 3일 토요일"];
  const [eventDateList, setEventDateList] = useState(null); //행사 날짜
  const [dateToggle, setDateToggle] = useState(false); //날짜 리스트 토글
  const [evnetList, setEventList] = useState(null); //행사 리스트
  const [listToggle, setListToggle] = useState(false); //행사 리스트 토글
  const [checkedItem, setCheckedItem] = useState(new Set()); //체크박스 체크한 아이템
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    email: "",
    belong: "",
    question: "",
  }); //신청자 정보 입력 input
  const [agree, setAgree] = useState(false);
  const [checkingToggle, setCheckingToggle] = useState(false);
  useEffect(() => {
    loadDate().then((res) => {
      // console.log(res);
      if (res === "-1") {
        setDateToggle(false);
      } else {
        setEventDateList(res);
        setDateToggle(true);
      }
    });
    loadEventList().then((res) => {
      // console.log(res);
      if (res === "-1") {
        setListToggle(false);
      } else {
        setEventList(res);
        setListToggle(true);
      }
    });
  }, []);

  /**
   * 날짜 목록 불러오는 함수
   * @returns {Promise<*>} :서버에서 받아온 데이터
   */
  async function loadDate() {
    const res = await axios.post(
      process.env.REACT_APP_API + "/events/eventDate"
    );
    return res.data;
  }

  /**
   * 행사 목록 불러오는 함수
   * @returns {Promise<*>} :서버에서 받아온 데이터
   */
  async function loadEventList() {
    const res = await axios.post(
      process.env.REACT_APP_API + "/events/eventList"
    );
    return res.data;
  }

  /**
   * 체크박스 체크 핸들러
   * @param e :evnet
   */
  function checkedHandler(e) {
    if (e.checked) {
      checkedItem.add(e.value);
    } else if (e.checked === false && checkedItem.has(e.value)) {
      checkedItem.delete(e.value);
    }
    setCheckedItem(checkedItem);
    // console.log(checkedItem);
  }

  /**
   * text box input 핸들러
   * @param e :event
   */
  function inputHandler(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    // console.log(inputValue);
  }

  function agreeHandler(e) {
    setAgree(!agree);
  }

  async function saveDate() {
    var arr = new Array();
    checkedItem.forEach((el) => {
      arr.push(parseInt(el));
    });
    const res = await axios.post(process.env.REACT_APP_API + "/events/save", {
      spector: inputValue,
      selEvent: arr,
    });
    return res.data;
  }

  function cancel() {
    checkedItem.clear();
    setInputValue(null);
    window.location.reload();
  }
  function submit() {
    if (agree) {
      if (inputValue.name === "" || inputValue.name === null) {
        alert("이름을 입력해주세요.");
      } else if (inputValue.phone === "" || inputValue.phone === null) {
        alert("전화번호를 입력해주세요.");
      } else {
        saveDate().then((res) => {
          console.log(res);
          if (res === "-1") {
            alert("오류 발생! 문의처:052-217-xxxx에 문의해주세요.");
          } else if (res == "-2") {
            alert("중복된 정보입니다.");
          } else {
            alert("신청 완료.");
            cancel();
          }
        });
      }
    } else {
      alert("개인정보취급방침을 체크해주세요.");
    }
  }
  function openChecking() {
    setCheckingToggle(true);
  }
  function closeChecking() {
    setCheckingToggle(false);
  }

  return (
    <div className="mid-section-wrap-01">
      {checkingToggle && <CheckingModal closeChecking={closeChecking} />}
      <div className="cnt-section-wrap">
        <div className="mid-section-rgt margin-btm-200">
          <div className="sect-07-tit-01 sect-tit">
            관람객
            <br />
            사전 등록
          </div>
          <div className="sect-07-cont-wrap">
            <div className="sect-07-cont-box">
              <div className="sect-07-cont-tit">개인정보취급방침</div>
              <div className="sect-07-cont-01">
                <div className="sect-07-cont-01-in">
                  이용자 및 법정 대리인은 언제든지 등 록되어 있는 자신 혹은 당해
                  만 14세 미만 아동의 개인정보를 조회하거나 수 정할 수 있으며
                  개인정보관리책임자 에게 서면, 전화 또는 이메일로 연락하시면
                  지체없이 삭제하겠습니다.
                  <br />
                  귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
                  완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
                  또한 잘못된 개인정보를 귀하가 개인정보의 오류에 대한 정정을
                  요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용
                  또는 제공하지 않습니다. 또한 잘못된 개인정보를 귀하가
                  개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
                  완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
                  또한 잘못된 개인정보를
                </div>
              </div>
              <div className="agree-frm">
                <label>
                  <input
                    type="checkbox"
                    name="agree"
                    onChange={(e) => agreeHandler(e)}
                  />
                  개인정보취급방침에 동의합니다
                </label>
              </div>
            </div>
            <div className="sect-07-cont-box">
              <div className="sect-07-cont-tit">신청자 정 보 입력</div>
              <InputForm inputHandler={inputHandler} />
            </div>
            <div className="sect-07-cont-box">
              <div className="sect-07-cont-tit">참관행사선택</div>
              <div className="sect-07-cont-03">
                <div className="event-frm">
                  {dateToggle &&
                    eventDateList.map((item, idx) => (
                      <ul key={idx} className="cont-03-thead">
                        <li className="cont-03-tit">{item.e_date_kr}</li>
                        <EventList
                          eventList={evnetList}
                          date={item.no}
                          checkedHandler={checkedHandler}
                        />
                      </ul>
                    ))}
                </div>
                <div className="event-frm-btn-box">
                  <button
                    type="button"
                    className="event-frm-btn-cancel"
                    onClick={cancel}
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    className="event-frm-btn-submit"
                    onClick={submit}
                  >
                    확인
                  </button>
                  <button
                    type="button"
                    className="event-frm-btn-check"
                    onClick={openChecking}
                  >
                    참관신청 확인
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="menu-09"></div>
        </div>
      </div>
    </div>
  );
};

export default Spectator;
