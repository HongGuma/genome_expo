const sharp = require("sharp");
const fs = require("fs");
const db = require("../db_info.js");
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

const dir = "./images";

var readFile = fs.readdirSync(dir);
insertDB(readFile);
// console.log(readFile);
// crop(readFile);

function insertDB(files) {
  var sql = `INSERT INTO gallery_file(photo_id,path,image_name,created_at) VALUES`;
  var i = 0;
  for (var file of files) {
    if (file == "crop") {
      continue;
    }
    sql += `(${i},'./images/${file}','${file}','${regDate}'),`;
    if (file.indexOf("thumbnail") == -1) {
      sql += `(${i},'./images/crop/${file}','${file}','${regDate}'),`;
    }
    i += 1;
  }
  sql = sql.slice(0, sql.length - 1);
  // console.log(sql);
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
}

function crop(originFile) {
  for (var file of originFile) {
    if (file == "crop" || file.indexOf("thumbnail") > -1) {
      continue;
    }
    sharp(`./images/${file}`)
      .resize({ width: 240 })
      .withMetadata()
      .toFile(`./images/crop/${file}`, (err, info) => {
        if (err) throw err;
        console.log(info);
      });
  }
}
