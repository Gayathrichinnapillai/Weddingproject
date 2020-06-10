var Useregister=require('../Models/Userregister');  
const config = require('../config.json'); 
var express=require('express');  
var router=express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


router.post('/',function(req,res,next){ 

    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    Useregister.count({ Emailid:req.body.Emailid})
    .then((count) => {
      if (count > 0) {     
        return res.status(400).send({
            message: "User already exist"
        });
      } 
      else
      {
          
      }
    });
    const userreg=new Useregister(req.body)
    {      
        if (req.body.Password) {
            userreg.Password = bcrypt.hashSync(req.body.Password, 10);
        }       
        userreg.save()
        .then(data => {
            res.send(data);
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
        result.token = token;
        result.result = user;
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