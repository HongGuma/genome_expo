import React, { useState, useEffect } from "react";
import axios from "axios";

const GalleryModal = ({ close, data }) => {
  const [fileNames, setFileNames] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [idx, setIdx] = useState(0);
  const [rightHover, setRightHover] = useState(false);
  const [leftHover, setLeftHover] = useState(false);

  useEffect(() => {
    // console.log(data);
    photoLoad().then((res) => {
      if (res != null && res.length > 0) {
        var tmp = [];
        for (var r of res) {
          tmp.push(r.image_name);
        }
        setFileNames(tmp);
        setCurrentImg(tmp.slice(0, 1));
      }
    });
  }, []);

  useEffect(() => {
    if (fileNames != null) {
      setCurrentImg(fileNames.slice(idx, idx + 1));
    }
    // console.log(currentImg);
  }, [idx]);

  async function photoLoad() {
    const res = await axios.post(
      process.env.REACT_APP_API + "/board/load/image_name",
      { ids: data.origin_img }
    );
    return res.data;
  }

  function onNext() {
    if (idx == fileNames.length - 1) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  }

  function onPrev() {
    if (idx == 0) {
      setIdx(fileNames.length - 1);
    } else {
      setIdx(idx - 1);
    }
  }

  return (
    <section className="section-4">
      <div className="sect-01">
        <div className="close-btn">
          <button className="close" onClick={close}>
            x
          </button>
        </div>
        <div className="sect-02">
          <div className="cont-01">
            <p>{data.title}</p>
          </div>
          <div className="cont-02">
            <div
              className="prev-btn"
              onMouseEnter={() => setRightHover(true)}
              onMouseLeave={() => setRightHover(false)}
            >
              <button onClick={onPrev}>{rightHover ? "◀" : "◁"}</button>
            </div>
            {currentImg != null && (
              <div>
                <img
                  src={
                    process.env.REACT_APP_API +
                    "/board/load/gallery/" +
                    currentImg
                  }
                  width="1300px"
                  height="900px"
                />
              </div>
            )}
            <div
              className="next-btn"
              onMouseEnter={() => setLeftHover(true)}
              onMouseLeave={() => setLeftHover(false)}
            >
              <button onClick={onNext}>{leftHover ? "▶" : "▷"}</button>
            </div>
          </div>
          <div className="cont-03">
            <p>조회수 : {data.read_cnt}</p>
            {fileNames != null && (
              <p>
                {idx + 1} / {fileNames.length}
              </p>
            )}
            <p>
              {data.created_at.slice(0, 4)}-{data.created_at.slice(4, 6)}-
              {data.created_at.slice(6, 8)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryModal;
