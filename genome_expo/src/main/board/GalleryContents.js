import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../css/board.css";

const GalleryContents = ({ openModal }) => {
  const [galleryList, setGalleryList] = useState(null);
  const [gallToggle, setGallToggle] = useState(false);
  const [imgToggle, setImgToggle] = useState(false);

  useEffect(() => {
    loadImg().then((res) => {
      console.log(res);
      if (res == "-1") {
        setGallToggle(false);
      } else {
        setGallToggle(true);
        setGalleryList(res);
      }
    });
  }, []);

  async function loadImg() {
    const load = await axios.post(
      process.env.REACT_APP_API + "/board/load/gallery",
      { tag: "tag" }
    );
    return load.data;
  }

  return (
    <section className="section-1">
      <div className="mediabox">
        <div>
          <ul>
            <li>전체</li>
            <li>2019</li>
            <li>2018</li>
          </ul>
        </div>
        <div className="board-tit">사진</div>
        <div className="board-page">TOTAL n건 1페이지</div>
        <div className="gallery-list">
          {galleryList != null &&
            galleryList.map((item, idx) => (
              <div
                className="gallery-item"
                key={idx}
                onClick={() => openModal(item)}
              >
                <Thumbnail photoId={item.thumbnail_img} />
                <p>{item.title}</p>
                <p>{item.writer}</p>
                <p>{item.created_at}</p>
                {/*<PhotoLoad imgNums={item.crop_img}/>*/}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const Thumbnail = ({ photoId }) => {
  const [fileName, setFileName] = useState(null);
  useEffect(() => {
    if (photoId != null) {
      loadThumbnail().then((res) => {
        setFileName(res.image_name);
      });
    }
  }, []);

  async function loadThumbnail() {
    const res = await axios.post(
      process.env.REACT_APP_API + "/board/load/gallery/thumbnail",
      { id: photoId }
    );
    return res.data[0];
  }

  return (
    <div>
      {/*<p>{fileName}</p>*/}
      {fileName != null && (
        <span>
          <img
            src={process.env.REACT_APP_API + "/board/load/image/" + fileName}
            width="280px"
            height="280px"
          />
        </span>
      )}
    </div>
  );
};

const PhotoLoad = ({ imgNums }) => {
  const [toggle, setToggle] = useState(false);
  const [numbers, setNumbers] = useState(null);
  useEffect(() => {
    if (imgNums != null && imgNums != "") {
      const part = imgNums.split(",");
      setNumbers(part);
    }
  }, []);
  return (
    <div>
      {numbers != null && numbers.map((num, idx) => <div key={idx}>{num}</div>)}
    </div>
  );
};

export default GalleryContents;
