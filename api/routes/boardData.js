const logger = require("../config/winston.js");
const expoDB = require("../db_info.js");
const express = require("express");
const requestIP = require("request-ip");
const fs = require("fs");
const route = express.Router();

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

//게시판 데이터 출력
route.post("/load", (req, res) => {
  try {
    const { table_name } = req.body;
    const sql = "SELECT * FROM " + table_name;
    expoDB.query(sql, (err, data) => {
      if (err) {
        logger.error(err);
        res.send("-1");
      } else {
        res.send(data.reverse());
      }
    });
  } catch (e) {
    logger.error(e);
  }
});

//문의사항 데이터 저장
route.post("/save/question", (req, res) => {
  try {
    const { input_value } = req.body;
    const ip = requestIP.getClientIp(req);
    const sql =
      "INSERT INTO inquiries (ca_num,wr_name,wr_hp,title,is_pass,password,contents,ip_addr,read_cnt,created_at)" +
      "VALUES ('" +
      input_value.category +
      "','" +
      input_value.writer +
      "','" +
      input_value.phone +
      "','" +
      input_value.title +
      "'," +
      "'" +
      input_value.isPass +
      "',SHA('" +
      input_value.password +
      "'),'" +
      input_value.content +
      "','" +
      ip.slice(7, ip.length) +
      "'," +
      "0,'" +
      regDate +
      "')";
    // console.log(sql);
    expoDB.query(sql, (err, result) => {
      if (err) {
        logger.error(err);
        res.send("-1");
      } else {
        logger.info("wrote question: " + ip.slice(7, ip.length));
        res.send("0");
      }
    });
  } catch (e) {
    logger.error(e);
  }
});

//문의사항 비밀글 비밀번호 확인
route.post("/check/inquiry_pw", (req, res) => {
  try {
    const { id, pw } = req.body;
    const sql = `SELECT * FROM inquiries WHERE id=${id} and password=SHA('${pw}')`;
    expoDB.query(sql, (err, resultList) => {
      if (err) {
        logger.error(err);
      } else {
        if (resultList != null && resultList.length > 0) {
          res.send("0");
        } else {
          res.send("-1");
        }
      }
    });
  } catch (e) {
    logger.error(e);
  }
});

//게시글 조회수 기능
route.post("/read_count", (req, res) => {
  try {
    const { table, id, cnt } = req.body;
    const sql = `UPDATE ${table} SET read_cnt = ${cnt + 1} WHERE id = ${id}`;
    // console.log(sql);
    expoDB.query(sql, (err, result) => {
      if (err) {
        logger.error(err);
      } else {
        res.send("0");
        // console.log(result);
        // console.log(result);
      }
    });
  } catch (e) {
    logger.error(err);
  }
});

//갤러리 데이터 로드
route.post("/load/gallery", (req, res) => {
  try {
    const { tag } = req.body;
    const sql = "SELECT * FROM gallery";
    expoDB.query(sql, (err, data) => {
      if (err) {
        logger.error(err);
        res.send("-1");
      } else {
        res.send(data);
      }
    });
  } catch (e) {
    logger.error(e);
  }
});

//사진 파일 이름 불러오기
route.post("/load/image_name", (req, res) => {
  try {
    const { ids } = req.body;
    const imgId = new Array();
    if (ids != null && ids != "") {
      const part = ids.split(",");
      var sql = `SELECT path,image_name FROM gallery_file WHERE`;
      for (var p of part) {
        if (p != null && p != "") {
          sql += ` photo_id = ${p} or`;
        }
      }
      sql = sql.slice(0, sql.length - 3);
      expoDB.query(sql, (err, result) => {
        if (err) {
          logger.error(err);
          res.send("-1");
        } else {
          // logger.info(`Call 'FileNames' from the gallery_file table `);
          const arr = new Array();
          for (var r of result) {
            if (r.path.indexOf("/crop") > -1) {
              continue;
            } else {
              arr.push(r);
            }
          }
          res.send(arr);
        }
      });
    } else {
      logger.error("There is no ID entered.");
      res.send("-1");
    }
  } catch (e) {
    logger.error(e);
  }
});

//썸네일 불러오기
route.post("/load/gallery/thumbnail", (req, res) => {
  try {
    const { id } = req.body;
    const sql = "SELECT * FROM gallery_file WHERE id=" + id;
    expoDB.query(sql, (err, data) => {
      if (err) {
        logger.error(err);
        res.send("-1");
      } else {
        res.send(data);
      }
    });
  } catch (e) {
    logger.error(e);
  }
});

//crop 사진 불러오기 (아마 안쓸듯)
route.get("/load/crop/:file_name", (req, res) => {
  const file_name = req.params.file_name;
  try {
    fs.readFile(`./data/images/crop/${file_name}`, (err, data) => {
      if (err) {
        logger.error(err);
        res.send("-1");
      } else {
        // res.send(data);
        res.writeHead(200, { "Context-Type": "image/jpg" });
        res.write(data);
        res.end();
      }
    });
  } catch (e) {
    logger.error(e);
  }
});
//사진 1장 불러오기
route.get("/load/image/:file_name", (req, res) => {
  const file_name = req.params.file_name;
  try {
    fs.readFile(`./data/images/${file_name}`, (err, data) => {
      if (err) {
        logger.error(err);
        res.send("-1");
      } else {
        // res.send(data);
        res.writeHead(200, { "Context-Type": "image/jpg" });
        res.write(data);
        res.end();
      }
    });
  } catch (e) {
    logger.error(e);
  }
});

//사진 불러오기
route.get("/load/gallery/:file_name", (req, res) => {
  const file_name = req.params.file_name;
  try {
    fs.readFile(`./data/images/${file_name}`, (err, data) => {
      if (err) {
        logger.error(err);
        res.send("-1");
      } else {
        // res.send(data);
        res.writeHead(200, { "Context-Type": "image/jpg" });
        res.write(data);
        res.end();
      }
    });
  } catch (e) {
    logger.error(e);
  }
});

module.exports = route;
