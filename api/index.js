/**
 *@title 서버 실행
 *@date 2022-02-07
 *@author 홍수희
 *@desc
 *@etc(change)
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extends:true}));
app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT || 3010;

const server = app.listen(3015, function(){
    console.log("Express server has started on port "+ port);
})

module.exports = app;