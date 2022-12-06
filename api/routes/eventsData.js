const logger = require("../config/winston.js");
const expoDB = require("../db_info.js");
const express = require("express");
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

//참관 행사 날짜 불러오기
route.post("/eventDate", (req, res) => {
  const sql = "SELECT * FROM events_date";
  expoDB.query(sql, (err, data) => {
    try {
      res.send(data);
    } catch (err) {
      logger.error(err);
      res.send("-1");
    }
  });
});
//참관 행사 목록 불러오기
route.post("/eventList", (req, res) => {
  const sql = "SELECT * FROM events;";
  expoDB.query(sql, (err, data) => {
    try {
      res.send(data);
    } catch (err) {
      logger.error(err);
      res.send("-1");
    }
  });
});

//참관신청
route.post("/save", (req, res) => {
  try {
    const ip = requestIP.getClientIp(req);
    const { spector, selEvent } = req.body;
    const phone = spector.phone.replace(/[-]/g, "");

    selEvent.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });

    var txt = "";
    for (var el of selEvent) {
      txt += `${el},`;
    }

    txt = txt.slice(0, txt.length - 1);

    const dupliSql = `select name, phone from participants where name='${spector.name}' and replace(phone,'-','')  = '${phone}';`;
    expoDB.query(dupliSql, (err, result) => {
      try {
        if (result != null && result.length > 0) {
          logger.info(
            `Duplicate apply. input:${spector.name}/${spector.phone} (ip:${ip})`
          );
          res.send("-2"); // 참석자 정보 중복
        } else {
          const sql =
            `INSERT INTO participants (name, phone, email, belong, event, genome_report_question, created_at) VALUES ` +
            `('${spector.name}','${phone}','${spector.email}','${spector.belong}','${txt}','${spector.question}','${regDate}');`;

          expoDB.query(sql, (err, result) => {
            try {
              logger.info(
                `Apply for the event. input: ${spector.name}/${phone}/${spector.email}/${spector.belong}/${spector.question}/${txt} (ip${ip}) `
              );
              res.send(`'${spector.name}'`);
            } catch (e) {
              logger.err(e);
              res.send("-1");
            }
          });
        }
      } catch (err) {
        logger.err(e);
        res.send("-1");
      }
    });
  } catch (e) {
    logger.err(e);
    res.send("-1");
  }
});

//참관신청 확인
route.post("/load/checking", (req, res) => {
  try {
    const { u_name, u_phone } = req.body;
    const ip = requestIP.getClientIp(req);
    const sql = `select * from participants where name = "${u_name}"`;
    const resultData = new Array();
    expoDB.query(sql, (err, userData) => {
      try {
        if (userData != null && userData.length > 0) {
          var tmp = null;
          for (var user of userData) {
            if (user.phone == u_phone) {
              tmp = user;
              break;
            }
          }
          if (tmp != null) {
            const part = tmp.event.split(",");
            expoDB.query("SELECT * FROM events", (err, eventData) => {
              const eventList = new Array();
              for (var event of eventData) {
                for (var p of part) {
                  if (p == event.id) {
                    eventList.push(event);
                  }
                }
              }
              resultData.push({
                user_nm: tmp.name,
                user_ph: tmp.phone,
                user_email: tmp.email,
                user_belong: tmp.belong,
                question: tmp.genome_report_question,
                events: eventList,
              });
              res.send(resultData[0]);
            });
          } else {
            res.send("-3"); //폰번호 불일치
          }
        } else {
          res.send("-2"); //일치하는 데이터 없음
        }
      } catch (err) {
        logger.error(err);
        res.send("-1");
      }
    });
  } catch (e) {
    logger.error(e);
    res.send("-1");
  }
});

module.exports = route;
