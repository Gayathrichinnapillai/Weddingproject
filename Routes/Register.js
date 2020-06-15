const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
var router=express.Router();
const Register=require('../Models/Registration');
const { request } = require('../app');
var verifytoken=require('../Routes/Verifytoken');
const fs = require('fs');
// enable files upload
router.use(fileUpload({
    createParentPath: true,
    limits: { 
        fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
    },
}));

router.get('/',verifytoken,function(req,res,next){ 
    Register.find()
    .then(Register => {
        res.send(Register);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving users."
        });
    });
}); 

router.post('/',verifytoken,async (req,res)=>{ 
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }   
    const reg = new Register(req.body)
    {

     //let avatar;
    
        //var filetest=req.files.avatar;
        try {
            let dept =req.files;
           var image1=dept.PassportSizePhotograph;
           var image2=dept.BridePassportSizePhotograph;
           var image3=dept.Passport;
           var image4=dept.BridePassport;
           var image5=dept.Marksheet;
           var image6=dept.BrideMarksheet;
           var image7=dept.RationCard;
           var image8=dept.BrideRationCard;
           var image9=dept.Aadharcard;
           var image10=dept.BrideAadharcard;
           var image11=dept.Voterid;
           var image12=dept.BrideVoterid;
           var image13=dept.DrivingLicence;
           var image14=dept.BrideDrivingLicence;
           var image15=dept.DivorceCopy;
           var image22=dept.BrideDivorceCopy;
           var image16=dept.FirstMarriageCertificate;
           var image17=dept.BrideFirstMarriageCertificate;
           var image18=dept.SpouseDeathCertificate;
           var image19=dept.BrideSpouseDeathCertificate;
            var image20=dept.SingleStatusCertificate; 
            var image21=dept.BrideSingleStatusCertificate;
            var image23=dept.Moreattach;
            var image24=dept.Invitation;
            var image25=dept.MarriageReceipt;
           console.log(image1);
            if(!image1) {            
                reg.PassportSizePhotograph =null;
            }
            else
            {         
                image1.mv('./Uploads/' + image1.name); 
                reg.PassportSizePhotograph =image1.name;
             }
             if(!image2) {            
                reg.BridePassportSizePhotograph =null;
            }
            else
            {         
                image2.mv('./Uploads/' + image2.name); 
                reg.BridePassportSizePhotograph =image2.name;
             }
             if(!image3) {            
                reg.Passport =null;
            }
            else
            {         
                image3.mv('./Uploads/' + image3.name); 
                reg.Passport =image3.name;
             }
             if(!image4) {            
                reg.BridePassport =null;
            }
            else
            {         
                image4.mv('./Uploads/' + image4.name); 
                reg.BridePassport =image4.name;
             }
             if(!image5) {            
                reg.Marksheet =null;
            }
            else
            {         
                image5.mv('./Uploads/' + image5.name); 
                reg.Marksheet =image5.name;
             }
             if(!image6) {            
                reg.BrideMarksheet =null;
            }
            else
            {         
                image6.mv('./Uploads/' + image6.name); 
                reg.BrideMarksheet =image6.name;
             }
             if(!image7) {            
                reg.RationCard =null;
            }
            else
            {         
                image7.mv('./Uploads/' + image7.name); 
                reg.BrideRationCard =image7.name;
             }
             if(!image8) {            
                reg.BrideRationCard =null;
            }
            else
            {         
                image8.mv('./Uploads/' + image8.name); 
                reg.BrideRationCard =image8.name;
             }
             if(!image9) {            
                reg.Aadharcard =null;
            }
            else
            {         
                image9.mv('./Uploads/' + image9.name); 
                reg.Aadharcard =image9.name;
             }
             if(!image10) {            
                reg.BrideAadharcard =null;
            }
            else
            {         
                image10.mv('./Uploads/' + image10.name); 
                reg.BrideAadharcard =image10.name;
             }
             if(!image11) {            
                reg.Voterid =null;
            }
            else
            {         
                image11.mv('./Uploads/' + image11.name); 
                reg.Voterid =image11.name;
             }
             if(!image12) {            
                reg.BrideVoterid =null;
            }
            else
            {         
                image12.mv('./Uploads/' + image12.name); 
                reg.BrideVoterid =image12.name;
             }
             if(!image13) {            
                reg.DrivingLicence =null;
            }
            else
            {         
                image13.mv('./Uploads/' + image13.name); 
                reg.DrivingLicence =image13.name;
             }
             if(!image14) {            
                reg.BrideDrivingLicence =null;
            }
            else
            {         
                image14.mv('./Uploads/' + image14.name); 
                reg.BrideDrivingLicence =image14.name;
             }
             if(!image15) {            
                reg.DivorceCopy =null;
            }
            else
            {         
                image15.mv('./Uploads/' + image15.name); 
                reg.DivorceCopy =image15.name;
             }
             if(!image22) {            
                reg.BrideDivorceCopy =null;
            }
            else
            {         
                image22.mv('./Uploads/' + image22.name); 
                reg.BrideDivorceCopy =image22.name;
             }
             if(!image16) {            
                reg.FirstMarriageCertificate =null;
            }
            else
            {         
                image16.mv('./Uploads/' + image16.name); 
                reg.FirstMarriageCertificate =image16.name;
             }
             if(!image17) {            
                reg.BrideFirstMarriageCertificate =null;
            }
            else
            {         
                image17.mv('./Uploads/' + image17.name); 
                reg.BrideFirstMarriageCertificate =image17.name;
             }
             if(!image18) {            
                reg.SpouseDeathCertificate =null;
            }
            else
            {         
                image18.mv('./Uploads/' + image18.name); 
                reg.SpouseDeathCertificate =image18.name;
             }
             if(!image19) {            
                reg.BrideSpouseDeathCertificate =null;
            }
            else
            {         
                image19.mv('./Uploads/' + image19.name); 
                reg.BrideSpouseDeathCertificate =image19.name;
             }

             if(!image20) {            
                reg.SingleStatusCertificate =null;
            }
            else
            {         
                image20.mv('./Uploads/' + image20.name); 
                reg.SingleStatusCertificate =image20.name;
             }

             if(!image21) {            
                reg.BrideSingleStatusCertificate =null;
            }
            else
            {         
                image21.mv('./Uploads/' + image21.name); 
                reg.BrideSingleStatusCertificate =image21.name;
             }

             if(!image23) {            
                reg.Moreattach =null;
            }
            else
            {         
                image23.mv('./Uploads/' + image23.name); 
                reg.Moreattach =image23.name;
             }
             if(!image24) {            
                reg.Invitation =null;
            }
            else
            {         
                image24.mv('./Uploads/' + image24.name); 
                reg.Invitation =image24.name;
             }
             if(!image25) {            
                reg.MarriageReceipt =null;
            }
            else
            {         
                image25.mv('./Uploads/' + image25.name); 
                reg.MarriageReceipt =image25.name;
             }

            reg.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Something wrong while creating the product."
                });
            });
        } catch (err) {
            res.status(500).send(err);
        }             
    }
});
router.put('/:id',verifytoken,function(req,res,next){ 
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    const id = req.params.id;
    let dept =req.files;
    var image1=dept.PassportSizePhotograph;
    var image2=dept.BridePassportSizePhotograph;
    var image3=dept.Passport;
    var image4=dept.BridePassport;
    var image5=dept.Marksheet;
    var image6=dept.BrideMarksheet;
    var image7=dept.RationCard;
    var image8=dept.BrideRationCard;
    var image9=dept.Aadharcard;
    var image10=dept.BrideAadharcard;
    var image11=dept.Voterid;
    var image12=dept.BrideVoterid;
    var image13=dept.DrivingLicence;
    var image14=dept.BrideDrivingLicence;
    var image15=dept.DivorceCopy;
    var image22=dept.BrideDivorceCopy;
    var image16=dept.FirstMarriageCertificate;
    var image17=dept.BrideFirstMarriageCertificate;
    var image18=dept.SpouseDeathCertificate;
    var image19=dept.BrideSpouseDeathCertificate;
     var image20=dept.SingleStatusCertificate; 
     var image21=dept.BrideSingleStatusCertificate;
     var image23=dept.Moreattach;
     var image24=dept.Invitation;
     var image25=dept.MarriageReceipt;
    
     const reg=req.body;
     console.log(reg);
     Register.findById(id)
     .then(data1 => {
       if (!data1)
         res.status(404).send({ message: "Not found  with id " + id });
       else
       {  
           if(!image1) {            
             reg.PassportSizePhotograph =data1.PassportSizePhotograph;
              }
     else
     {    
        fs.unlink('Uploads/'+data1.PassportSizePhotograph, (err) => {
            if (err) res.status(404).send({ message: "Image not found"});
          });     
         image1.mv('./Uploads/' + image1.name); 
         reg.PassportSizePhotograph =image1.name;
      }
      if(!image2) {            
        reg.BridePassportSizePhotograph =data1.BridePassportSizePhotograph;
    }
    else
    {        
        fs.unlink('Uploads/'+data1.BridePassportSizePhotograph, (err) => {
            if (err) res.status(404).send({ message: "Image not found"});
          });   
        image2.mv('./Uploads/' + image2.name); 
        reg.BridePassportSizePhotograph =image2.name;
     }
     if(!image3) {            
        reg.Passport =data1.Passport;
    }
    else
    {   
        fs.unlink('Uploads/'+data1.Passport, (err) => {
            if (err)  res.status(404).send({ message: "Image not found"});
          });        
        image3.mv('./Uploads/' + image3.name); 
        reg.Passport =image3.name;
     }
     if(!image4) {            
        reg.BridePassport =data1.BridePassport;
    }
    else
    {   
        fs.unlink('Uploads/'+data1.BridePassport, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
      });  
        image4.mv('./Uploads/' + image4.name); 
        reg.BridePassport =image4.name;
     }
     if(!image5) {            
        reg.Marksheet =data1.Marksheet;
    }
    else
    {   fs.unlink('Uploads/'+data1.Marksheet, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
      }); 
        image5.mv('./Uploads/' + image5.name); 
        reg.Marksheet =image5.name;
     }
     if(!image6) {            
        reg.BrideMarksheet =data1.BrideMarksheet;
    }
    else
    {        
        fs.unlink('Uploads/'+data1.BrideMarksheet, (err) => {
            if (err) res.status(404).send({ message: "Image not found"});
          });  
        image6.mv('./Uploads/' + image6.name); 
        reg.BrideMarksheet =image6.name;
     }
     if(!image7) {            
        reg.RationCard =data1.RationCard;
    }
    else
    {    fs.unlink('Uploads/'+data1.RationCard, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
      });    
        image7.mv('./Uploads/' + image7.name); 
        reg.BrideRationCard =image7.name;
     }
     if(!image8) {            
        reg.BrideRationCard =data1.BrideRationCard;
    }
    else
    {       fs.unlink('Uploads/'+data1.BrideRationCard, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
      });   
        image8.mv('./Uploads/' + image8.name); 
        reg.BrideRationCard =image8.name;
     }
     if(!image9) {            
        reg.Aadharcard =data1.Aadharcard;
    }
    else
    {   fs.unlink('Uploads/'+data1.Aadharcard, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
      });       
        image9.mv('./Uploads/' + image9.name); 
        reg.Aadharcard =image9.name;
     }
     if(!image10) {            
        reg.BrideAadharcard =data1.BrideAadharcard;
    }
    else
    {   fs.unlink('Uploads/'+data1.BrideAadharcard, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });
        image10.mv('./Uploads/' + image10.name); 
        reg.BrideAadharcard =image10.name;
     }
     if(!image11) {            
        reg.Voterid =data1.Voterid;
    }
    else
    {     fs.unlink('Uploads/'+data1.Voterid, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });     
        image11.mv('./Uploads/' + image11.name); 
        reg.Voterid =image11.name;
     }
     if(!image12) {            
        reg.BrideVoterid =data1.BrideVoterid;
    }
    else
    {      fs.unlink('Uploads/'+data1.BrideVoterid, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });    
        image12.mv('./Uploads/' + image12.name); 
        reg.BrideVoterid =image12.name;
     }
     if(!image13) {            
        reg.DrivingLicence =data1.DrivingLicence;
    }
    else
    {    fs.unlink('Uploads/'+data1.DrivingLicence, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });    
        image13.mv('./Uploads/' + image13.name); 
        reg.DrivingLicence =image13.name;
     }
     if(!image14) {            
        reg.BrideDrivingLicence =data1.BrideDrivingLicence;
    }
    else
    {         fs.unlink('Uploads/'+data1.BrideDrivingLicence, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        }); 
        image14.mv('./Uploads/' + image14.name); 
        reg.BrideDrivingLicence =image14.name;
     }
     if(!image15) {            
        reg.DivorceCopy =data1.DivorceCopy;
    }
    else
    {     fs.unlink('Uploads/'+data1.DivorceCopy, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });      
        image15.mv('./Uploads/' + image15.name); 
        reg.DivorceCopy =image15.name;
     }
     if(!image22) {            
        reg.BrideDivorceCopy =data1.BrideDivorceCopy;
    }
    else
    {      fs.unlink('Uploads/'+data1.BrideDivorceCopy, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });     
        image22.mv('./Uploads/' + image22.name); 
        reg.BrideDivorceCopy =image22.name;
     }
     if(!image16) {            
        reg.FirstMarriageCertificate =data1.FirstMarriageCertificate;
    }
    else
    {     fs.unlink('Uploads/'+data1.FirstMarriageCertificate, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });      
        image16.mv('./Uploads/' + image16.name); 
        reg.FirstMarriageCertificate =image16.name;
     }
     if(!image17) {            
        reg.BrideFirstMarriageCertificate =data1.BrideFirstMarriageCertificate;
    }
    else
    {    fs.unlink('Uploads/'+data1.BrideFirstMarriageCertificate, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });       
        image17.mv('./Uploads/' + image17.name); 
        reg.BrideFirstMarriageCertificate =image17.name;
     }
     if(!image18) {            
        reg.SpouseDeathCertificate =data1.SpouseDeathCertificate;
    }
    else
    {   fs.unlink('Uploads/'+data1.SpouseDeathCertificate, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });    
        image18.mv('./Uploads/' + image18.name); 
        reg.SpouseDeathCertificate =image18.name;
     }
     if(!image19) {            
        reg.BrideSpouseDeathCertificate =data1.BrideSpouseDeathCertificate;
    }
    else
    {    fs.unlink('Uploads/'+data1.BrideSpouseDeathCertificate, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });  
        image19.mv('./Uploads/' + image19.name); 
        reg.BrideSpouseDeathCertificate =image19.name;
     }

     if(!image20) {            
        reg.SingleStatusCertificate =data1.SingleStatusCertificate;
    }
    else
    {     fs.unlink('Uploads/'+data1.SingleStatusCertificate, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });      
        image20.mv('./Uploads/' + image20.name); 
        reg.SingleStatusCertificate =image20.name;
     }

     if(!image21) {            
        reg.BrideSingleStatusCertificate =data1.BrideSingleStatusCertificate;
    }
    else
    {         fs.unlink('Uploads/'+data1.BrideSingleStatusCertificate, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });
        image21.mv('./Uploads/' + image21.name); 
        reg.BrideSingleStatusCertificate =image21.name;
     }

     if(!image23) {            
        reg.Moreattach =data1.Moreattach;
    }
    else
    {   fs.unlink('Uploads/'+data1.Moreattach, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });      
        image23.mv('./Uploads/' + image23.name); 
        reg.Moreattach =image23.name;
     }
     if(!image24) {            
        reg.Invitation =data1.Invitation;
    }
    else
    {    fs.unlink('Uploads/'+data1.Invitation, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });   
        image24.mv('./Uploads/' + image24.name); 
        reg.Invitation =image24.name;
     }
     if(!image25) {            
        reg.MarriageReceipt =data1.MarriageReceipt;
    }
    else
    {   fs.unlink('Uploads/'+data1.MarriageReceipt, (err) => {
        if (err) res.status(404).send({ message: "Image not found"});
        });
        image25.mv('./Uploads/' + image25.name); 
        reg.MarriageReceipt =image25.name;
     }
     
console.log(reg);
    Register.findByIdAndUpdate(id,reg, { useFindAndModify: false })     
      .then(data => {
        if (!data) {
          res.status(404).send({
              response_code:"404",
              response_message: `Cannot update  with id=${id}.`
          });
        } else res.send({ response_code:"200",response_message: "Details was updated successfully.",response:data});
      })
      .catch(err => {
        res.status(500).send({
            response_code:"500",
            response_message: "Error updating Tutorial with id=" + id
        });
      }); 
       } 
    });
});
router.delete('/:id',function(req,res,next){ 
    Register.findByIdAndRemove({_id:req.params.id})
    .then(Register => {
        if(!Register) {
            return res.status(404).send({
                message: "user not found with id " + req.params.productId
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "user not delete product with id " + req.params.id
        });
    });
});
router.use(express.static('Uploads'));
module.exports=router;  