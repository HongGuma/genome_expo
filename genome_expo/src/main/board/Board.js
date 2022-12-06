import React, { useState, useEffect } from "react";
import axios from "axios";

import PostContents from "./PostContents.js";
import Pagination from "./Pagination.js";
import PostModal from "./PostModal.js";
import GalleryContents from "./GalleryContents.js";
import GalleryModal from "./GalleryModal.js";
import InquiryContents from "./InquiryContents.js";
import InquiryWrite from "./InquiryWrite.js";
import InquiryModal from "./InquiryModal.js";

const Board = () => {
  const [tabNumber, setTabNumber] = useState("1"); //선택한 탭 번호
  const [tabName, setTabName] = useState("공지사항"); //선택한 탭 이름
  const [tabToggle, setTabToggle] = useState(false); //탭 토글 데이터  없으면 출력 안되게 함
  const [list, setList] = useState(null); //각 게시판 게시글 리스트
  const [popupToggle, setPopupToggle] = useState(false); //공지사항, 보도자료 팝업
  const [writeToggle, setWriteToggle] = useState(false); //문의사항 글 쓰기 토글
  const [photoToggle, setPhotoToggle] = useState(false); //갤러리 사진 토글
  const [inquiryToggle, setInquiryModal] = useState(false); //문의사항 게시글 토글
  const [post, setPost] = useState(null); //게시글 한개 클릭시 팝업창에 넘겨줄 게시글 데이터 (1개)

  //pagination
  const page = 6;
  const [curPage, setCurPage] = useState(1);
  const idxOfLast = curPage * page;
  const idxOfFirst = idxOfLast - page;
  const [currentList, setCurrentList] = useState(null);

  useEffect(() => {
    const parm = setTableName(tabNumber);
    loadData(parm).then((res) => {
      if (res == "-1") {
        setTabToggle(false);
      } else {
        setTabToggle(true);
        setList(res);
        setCurrentList(res.slice(idxOfFirst, idxOfLast));
      }
    });
  }, [tabNumber]);

  useEffect(() => {
    if (list != null && list.length > 0) {
      setCurrentList(list.slice(idxOfFirst, idxOfLast));
    }
  }, [curPage]);

  async function loadData(parm) {
    const res = await axios.post(process.env.REACT_APP_API + "/board/load", {
      table_name: parm,
    });
    return res.data;
  }

  async function readCount(tableName, count, id) {
    const res = await axios.post(
      process.env.REACT_APP_API + "/board/read_count",
      { table: tableName, id: id, cnt: count }
    );
  }

  function setTableName(num) {
    var tableName = "";
    if (num === "2") {
      setTabName("보도자료");
      tableName = "presses";
    } else if (num === "3") {
      setTabName("갤러리");
      tableName = "gallery";
    } else if (num === "4") {
      setTabName("문의사항");
      tableName = "inquiries";
    } else {
      setTabName("공지사항");
      tableName = "notices";
    }
    return tableName;
  }
  //탭버튼 클릭
  function tabClick(num) {
    setTabNumber(num);
  }
  //하단 숫자 클릭
  function numClick(page) {
    setCurPage(page);
  }
  //공지사항,보도자료 팝업
  function closePopup() {
    setPopupToggle(false);
  }
  function openPopup(postData) {
    setPopupToggle(true);
    setPost(postData);
    if (tabNumber == "2") {
      readCount("presses", postData.read_cnt, postData.id);
    } else {
      readCount("notices", postData.read_cnt, postData.id);
    }
  }
  //문의사항 글쓰기 팝업
  function openWriteModal() {
    setWriteToggle(true);
  }
  function closeWriteModal() {
    setWriteToggle(false);
  }
  //갤러리 팝업
  function openPhotoModal(galleryData) {
    setPhotoToggle(true);
    setPost(galleryData);
    readCount("gallery", galleryData.read_cnt, galleryData.id);
  }
  function closePhotoModal() {
    setPhotoToggle(false);
  }
  //문의사항 팝업
  function openInquiry(inquiryData) {
    setInquiryModal(true);
    setPost(inquiryData);
    readCount("inquiries", inquiryData.read_cnt, inquiryData.id);
  }
  function closeInquiry() {
    setInquiryModal(false);
  }

  return (
    <div className="mid-section-wrap-02">
      {popupToggle && (
        <PostModal tabName={tabName} closePopup={closePopup} post={post} />
      )}
      {writeToggle && <InquiryWrite closeWriteModal={closeWriteModal} />}
      {photoToggle && <GalleryModal close={closePhotoModal} data={post} />}
      {inquiryToggle && (
        <InquiryModal
          tabName={tabName}
          close={closeInquiry}
          inquiryPost={post}
        />
      )}
      <div className="cnt-section-wrap-02">
        <div className="mid-section-cnt">
          <div className="sect-08-tit-01 sect-tit" href="#section-1">
            게시판
          </div>
          <div id="tabs" className="tabs">
            <div className="board-tabs">
              <ul>
                <li
                  className={tabNumber == 1 ? "tab-current" : null}
                  onClick={() => tabClick("1")}
                >
                  <a className="icon-noti">
                    <span>공지사항</span>
                  </a>
                </li>
                <li
                  className={tabNumber == 2 ? "tab-current" : null}
                  onClick={() => tabClick("2")}
                >
                  <a className="icon-press">
                    <span>보도자료</span>
                  </a>
                </li>
                <li
                  className={tabNumber == 3 ? "tab-current" : null}
                  onClick={() => tabClick("3")}
                >
                  <a className="icon-photo">
                    <span>갤러리</span>
                  </a>
                </li>
                <li
                  className={tabNumber == 4 ? "tab-current" : null}
                  onClick={() => tabClick("4")}
                >
                  <a className="icon-faq">
                    <span>문의사항</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              {(tabNumber == 1 || tabNumber == 2) && (
                <PostContents
                  tabName={tabName}
                  list={currentList}
                  openPopup={openPopup}
                />
              )}
              {tabNumber == 3 && <GalleryContents openModal={openPhotoModal} />}
              {tabNumber == 4 && (
                <InquiryContents
                  tabName={tabName}
                  list={list}
                  openWriteModal={openWriteModal}
                  openInquiry={openInquiry}
                />
              )}
            </div>
            {list != null && list.length > 0 && (
              <Pagination total={list.length} numClick={numClick} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
