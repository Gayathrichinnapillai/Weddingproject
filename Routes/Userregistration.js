var Useregister=require('../Models/Userregister');  
const config = require('../config.json'); 
var express=require('express');  
var router=express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


router.post('/',async(req,res)=>{ 

    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
  
        if (await Useregister.findOne({ Emailid:req.body.Emailid})) {
            res.status(401).send({
                response_code:401,
                response_message:"Emailid already exist."
            });
            return;
        }
        if (await Useregister.findOne({ Phonenumber:req.body.Phonenumber})) {
            res.status(401).send({
                response_code:401,
                response_message:"Phonenumber already exist."               
            });
          return;
        }
    const userreg=new Useregister(req.body)
    {      
        if (req.body.Password) {
            userreg.Password = bcrypt.hashSync(req.body.Password, 10);
        }       
        userreg.save()
        .then(data => {
            res.status(200).send({
                response_status:"200",
                response_message:"created"
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while creating the product."
            });
        });
    }
});

router.post('/authenticate',function(req,res,next)
{
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    var result={};
    Useregister.find({'Emailid':req.body.Emailid},function(err, user) {
       if(user.length>0)
       {

       }
       else
       {
        return res.status(400).send({
            message: "Invalid email"
        }); 
       }
    if (user && bcrypt.compareSync(req.body.Password,user[0].Password)) {
        const token = jwt.sign({ sub: user.id }, config.secretKey,{expiresIn: '60m'});
        result.response_code="200";
        result.response_message="success";
        result.token = token;
        res.send(result);       
    }
    else
    {
        return res.status(400).send({
            message: "Invalid password"
        });
    }
  });   
});
module.exports=router;