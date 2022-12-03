const logger = require('../config/winston.js');
const requestIP = require('request-ip');
const db =require('../db_info.js');
const express = require('express');
const route = express.Router();

route.post('/ip-check',(req,res)=>{
    try{
        const ip = requestIP.getClientIp(req);
        logger.info(`Admin page access. (ip-${ip})`);
        if(ip.indexOf('210.218.217') > -1 || ip.indexOf('114.70.12.210') > -1){
            res.send('0');
        }else{
            res.send('-1');
        }
    }catch(e){
        logger.err(e);
        res.send('-1');
    }
})

route.post('/login',(req,res)=>{
    try {
        const ip = requestIP.getClientIp(req);
        const {id,pw} = req.body;
        const query = `SELECT * FROM admin where adm_id = '${id}' and adm_pw = SHA('${pw}')`;
        db.query(query,(err,result)=>{
            try{
                logger.info(`login/ id = ${id}, (ip-${ip})`);
                const auth = new Array();
                for(var el of result){
                    auth.push({id:el.adm_id,name:el.adm_name,grade:el.adm_grade,depth:el.adm_depth});
                }
                // console.log(auth)
                res.send(auth);
            }catch(e){
                logger.error(e);
                res.send('-1');
            }
        })
    }catch(e){
        logger.err(e);
    }

})

module.exports = route;
