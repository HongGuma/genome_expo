const logger = require("../config/winston.js");
const expoDB = require("../db_info.js");
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const route = express.Router();
const requestIP = require("request-ip");

const today = new Date();
const year = today.getFullYear();
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const day = ("0" + today.getDate()).slice(-2);
const regDate =
  year +
  month +
  day +
  today.getHours().toString() +
  today.getMinutes().toString() +
  today.getSeconds().toString();

const imageUploadPath = "/BiO/Serve/Httpd/genomeexpo.dev/company_images";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageUploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const imageUpload = multer({ storage: storage });

//기업 참관신청
route.post("/save", (req, res) => {
  try {
    const ip = requestIP.getClientIp(req);
    const { company_reg, extra } = req.body;
    logger.info(req.body);
    const sql =
      `INSERT INTO company_registration (kor_name, eng_name, items, items_desc, kor_com_intro, eng_com_intro, kor_item_intro, eng_item_intro, contact, created_at) VALUES ` +
      `('${company_reg.kor_name}','${company_reg.eng_name}','${company_reg.items}','${company_reg.items_desc}','${company_reg.kor_com_intro}','${company_reg.eng_com_intro}', '${company_reg.kor_item_intro}', '${company_reg.eng_item_intro}', '${company_reg.contact}', '${regDate}');`;

    expoDB.query(sql, (err, result) => {
      try {
        logger.info(
          `Apply for the event. input: ${company_reg.kor_name}/${company_reg.items}/ (ip${ip}) `
        );
        res.send("0");
      } catch (e) {
        logger.err(e);
        res.send("-1");
      }
    });
  } catch (err) {
    logger.err(e);
    res.send("-1");
  }
});

route.post("/upload", imageUpload.array("my-image-file"), (req, res) => {
  setTimeout(() => {
    console.log("file uploaded!");
    return res.status(200).json({ result: true, msg: "file uploaded!" });
  }, 3000);
});

route.post("/delete", (req, res) => {
  const file_name = req.body;

  fs.unlink(imageUploadPath + "/" + file_name.name, (err) => {});
  return res.status(200).json({ result: true, msg: "file deleted!" });
});

module.exports = route;
