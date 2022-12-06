import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import contItem01 from "../../images/cont_item_01.svg";

const InquiryModal = ({ tabName, close, inquiryPost }) => {
  const [pass, setPass] = useState(false);

  useEffect(() => {
    if (inquiryPost.is_pass == "Y") {
      setPass(false);
    } else {
      setPass(true);
    }
  }, [inquiryPost]);

  function successful() {
    setPass(true);
  }
  return (
    <>
      {pass ? (
        <TheSamePassword
          tabName={tabName}
          close={close}
          inquiryPost={inquiryPost}
        />
      ) : (
        <InputPassword
          close={close}
          id={inquiryPost.id}
          successful={successful}
        />
      )}
    </>
  );
};

const InputPassword = ({ close, id, successful }) => {
  const [password, setPassword] = useState(null);
  function inputPassword(e) {
    setPassword(e.target.value);
  }

  async function sendServer() {
    const res = await axios.post(
      process.env.REACT_APP_API + "/board/check/inquiry_pw",
      { id: id, pw: password }
    );
    return res.data;
  }

  function onSubmit() {
    sendServer().then((res) => {
      if (res == "0") {
        successful();
      } else {
        alert("입력하신 비밀번호가 맞지 않습니다.");
      }
    });
  }

  return (
    <section className="section-2">
      <div className="sect-02">
        <div className="close">
          <button onClick={close}>X</button>
        </div>
        <div className="input-form">
          <p>비밀번호</p>
          <input
            type="password"
            name="password"
            onChange={(e) => inputPassword(e)}
          />
          <button onClick={onSubmit}>확인</button>
        </div>
      </div>
    </section>
  );
};

const TheSamePassword = ({ tabName, close, inquiryPost }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (inquiryPost != null) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [inquiryPost]);
  return (
    <section className="section-2">
      <div className="sect-01">
        <div className="close-btn">
          <button className="close" onClick={close}>
            x
          </button>
        </div>
        <div className="cont-01">
          <div className="post-tit">
            <h3>
              <span>{tabName}</span>
            </h3>
          </div>
          <div>
            <img src={contItem01} />
          </div>
        </div>
        {toggle ? (
          <div className="cont-02">
            <p>{inquiryPost.title}</p>
            <p>{inquiryPost.wr_name}</p>
            {inquiryPost.created_at != null && (
              <p>
                {inquiryPost.created_at.slice(0, 4)}-
                {inquiryPost.created_at.slice(4, 6)}-
                {inquiryPost.created_at.slice(6, 8)}
              </p>
            )}
          </div>
        ) : (
          <div className="cont-02">
            <p>NULL</p>
            <p>NULL</p>
            <p>NULL</p>
          </div>
        )}
        <div className="cont-04">
          {toggle ? (
            <div>{ReactHtmlParser(inquiryPost.contents)}</div>
          ) : (
            <p>NULL</p>
          )}
        </div>
        <div className="line">
          <span></span>
        </div>
        <div className="cont-06">답변</div>
        <div className="close-btn">
          <button className="menu" onClick={close}>
            목록
          </button>
        </div>
      </div>
    </section>
  );
};

export default InquiryModal;
