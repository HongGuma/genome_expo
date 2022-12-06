import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import axios from "axios";

import "../css/login.css";

const Login = () => {
  const [auth, setAuth] = useState({
    id: "",
    pw: "",
  });
  var history = useHistory();

  function onChangeValue(e) {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  }

  function onSubmit() {
    login().then((res) => {
      if (res != "1" && res.length > 0) {
        for (var i of res) {
          sessionStorage.setItem("id", i.id);
          sessionStorage.setItem("name", i.name);
          sessionStorage.setItem("grade", i.grade);
          sessionStorage.setItem("depth", i.depth);
        }
        history.push("/admin");
      } else {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    });
  }

  async function login() {
    const res = await axios.post(process.env.REACT_APP_API + "/admin/login", {
      id: auth.id,
      pw: auth.pw,
    });
    return res.data;
  }

  return (
    <div className="admin-login">
      <div id="header-line"></div>
      <div className="sect-01-wrap">
        <div className="sect-01">
          <div className="sect-01-cont">
            <p>관리자 페이지 로그인</p>
            <div className="login-form">
              <ul>
                <li>아이디</li>
                <li>
                  <input
                    type="textbox"
                    className="in-txt"
                    name="id"
                    onChange={(e) => onChangeValue(e)}
                  />
                </li>
              </ul>
              <ul>
                <li>비밀번호</li>
                <li>
                  <input
                    type="password"
                    className="in-txt"
                    name="pw"
                    onChange={(e) => onChangeValue(e)}
                  />
                </li>
              </ul>
            </div>
            <button className="login-btn" onClick={onSubmit}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
