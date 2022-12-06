import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "../../css/board.css";

const InquiryWrite = ({ closeWriteModal }) => {
  const [selected, setSelected] = useState(null);
  const [inputValue, setInputValue] = useState({
    category: "1",
    writer: "",
    phone: "",
    title: "",
    isPass: "",
    password: "",
    content: "",
  });
  const { isPass } = inputValue;
  const options = [
    { value: "1", label: "접수내용 수정 및 참여취소" },
    { value: "2", label: "제출 서류" },
    { value: "3", label: "참여 절차 및 방문 일정" },
    { value: "4", label: "기타" },
  ];
  function onChangeValue(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  function onChecked(checked) {
    if (checked) {
      setInputValue({ ...inputValue, isPass: "Y" });
    } else {
      setInputValue({ ...inputValue, isPass: "N" });
    }
  }
  async function onSubmit() {
    // setInputValue({...inputValue,category:selected.value});
    // console.log(inputValue);
    const res = await axios.post(
      process.env.REACT_APP_API + "/board/save/question",
      { input_value: inputValue }
    );
    if (res.data == "-1") {
      alert("저장 실패. 문의처에 문의해주세요.");
    } else {
      alert("작성 완료.");
      closeWriteModal();
      window.location.reload();
    }
  }
  return (
    <section className="section-2">
      <div className="sect-03">
        <div className="close-btn">
          <button className="close" onClick={closeWriteModal}>
            x
          </button>
        </div>
        <div className="cont-01">
          이름:
          <input
            type="text"
            name="writer"
            onChange={(e) => onChangeValue(e)}
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div className="cont-01">
          휴대전화:
          <input
            type="text"
            name="phone"
            onChange={(e) => onChangeValue(e)}
            placeholder="번호를 입력해주세요."
          />
        </div>
        <div className="cont-01">
          구분:
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value="1">접수내용 수정 및 참여취소</option>
            <option value="2">제출 서류</option>
            <option value="3">참여 절차 및 방문 일정</option>
            <option value="4">기타</option>
          </select>
          {/*<Select name="category" onChange={setSelected} options={options}/>*/}
        </div>
        <div className="cont-01">
          제목:
          <input
            type="text"
            name="title"
            onChange={(e) => onChangeValue(e)}
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div className="cont-02">
          본문
          <CKEditor
            editor={ClassicEditor}
            data="<p>문의하실 내용을 입력해주세요.</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log( 'Editor is ready to use!', editor );
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setInputValue({ ...inputValue, content: data });
              // console.log( { event, editor, data } );
            }}
            onBlur={(event, editor) => {
              // console.log( 'Blur.', editor );
            }}
            onFocus={(event, editor) => {
              // console.log( 'Focus.', editor );
            }}
          />
        </div>
        <div className="cont-01">
          {" "}
          비밀글 설정{" "}
          <input
            type="checkbox"
            onChange={(e) => onChecked(e.target.checked)}
            name="isPass"
          />
        </div>
        {isPass == "Y" && (
          <div className="cont-01">
            {" "}
            비밀번호{" "}
            <input
              type="password"
              onChange={(e) => onChangeValue(e)}
              name="password"
            />
          </div>
        )}
        <div className="close-btn">
          <button className="Cancel" onClick={closeWriteModal}>
            취소
          </button>
          <button className="submit" onClick={onSubmit}>
            확인
          </button>
        </div>
      </div>
    </section>
  );
};

export default InquiryWrite;
