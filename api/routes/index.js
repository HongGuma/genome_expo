/**
 *@title routes index
 *@date 2022-02-07
 *@author 홍수희
 *@desc
 *@etc(change)
 */

const express = require('express');
const router = express.Router();

const events = require('./eventsData.js'); //행사 정보
const board = require('./boardData.js'); // 게시판 정보
const admin = require('./admin.js'); //관리자 정보
const company = require('./companyData.js')

router.use('/events',events);
router.use('/board',board);
router.use('/admin',admin);
router.use('/company', company)

// const data = require('./data.js');
// router.use('/data',data);

module.exports = router;