
var Register=require('../Models/Registration');  
var express=require('express');  
var router=express.Router();
let verifytoken = require('./verifytoken');

router.get('/',function(req,res,next){ 
    Register.find()
    .then(Register => {
        res.send(Register);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving users."
        });
    });
}); 

router.post('/',verifytoken,function(req,res,next){ 
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    // Create a Product
 console.log(req.body.ResiAddress.Street);
    const reg = new Register({
        Dateofmarriage:req.body.Dateofmarriage,
        Name: req.body.Name, 
        Nationality: req.body.Nationality,
        ResidentialStatus: req.body.ResidentialStatus,
        Religion: req.body.Religion,
        Caste:req.body.Caste,
        Dateofbirth: req.body.Dateofbirth,
        Employername: req.body.Employername,
        Designation:req.body.Designation,
        MaritalStatusBeforeMarriage: req.body.MaritalStatusBeforeMarriage,
        Mobileno: req.body.Mobileno,
        whatsappnumber:req.body.whatsappnumber,
        Email: req.body.Email,
        ResiAddress:{
            Street:req.body.ResiAddress.Street,
            village:req.body.ResiAddress.village,
            Taluk:req.body.ResiAddress.Taluk,
            District:req.body.ResiAddress.District,
            State:req.body.ResiAddress.State,
            Country:req.body.ResiAddress.Country,
            Pincode:req.body.ResiAddress.Pincode
        },
        Passportno: req.body.Passportno,
        Fathername:req.body.Fathername,
        Fatherreligion: req.body.Fatherreligion,
        FLivingStatus:req.body.FLivingStatus,
        FatherAge: req.body.FatherAge,
        FatherOccupation:req.body.FatherOccupation,
        Fatheraddress:{
            Street:req.body.Fatheraddress.Street,
            village:req.body.Fatheraddress.village,
            Taluk:req.body.Fatheraddress.Taluk,
            District:req.body.Fatheraddress.District,
            State:req.body.Fatheraddress.State,
            Country:req.body.Fatheraddress.Country,
            Pincode:req.body.Fatheraddress.Pincode
        },
        MotherName:req.body.MotherName,
        Motherreligion: req.body.Motherreligion,
        MLivingStatus:req.body.MLivingStatus,
        MotherAge:req.body.MotherAge,
        MotherOccupation: req.body.MotherOccupation,
        Motheraddress:{
            Street:req.body.Motheraddress.Street,
            village:req.body.Motheraddress.village,
            Taluk:req.body.Motheraddress.Taluk,
            District:req.body.Motheraddress.District,
            State:req.body.Motheraddress.State,
            Country:req.body.Motheraddress.Country,
            Pincode:req.body.Motheraddress.Pincode
        },
        BrideName: req.body.BrideName, 
        BrideNationality: req.body.BrideNationality,
        BrideResidentialStatus: req.body.BrideResidentialStatus,
        BrideReligion: req.body.BrideReligion,
        BrideCaste:req.body.BrideCaste,
        BrideDateofbirth: req.body.BrideDateofbirth,
        BrideEmployername: req.body.BrideEmployername,
        BrideDesignation:req.body.BrideDesignation,
        BrideMaritalStatusBeforeMarriage: req.body.BrideMaritalStatusBeforeMarriage,
        BrideMobileno: req.body.BrideMobileno,
        Bridewhatsappnumber:req.body.Bridewhatsappnumber,
        BrideEmail: req.body.BrideEmail,
        BrideResiAddress:{
            Street:req.body.BrideResiAddress.Street,
            village:req.body.BrideResiAddress.village,
            Taluk:req.body.BrideResiAddress.Taluk,
            District:req.body.BrideResiAddress.District,
            State:req.body.BrideResiAddress.State,
            Country:req.body.BrideResiAddress.Country,
            Pincode:req.body.BrideResiAddress.Pincode
        },
        BridePassportno: req.body.BridePassportno,
        BrideFathername:req.body.BrideFathername,
        BrideFatherreligion: req.body.BrideFatherreligion,
        BrideFLivingStatus:req.body.BrideFLivingStatus,
        BrideFatherAge: req.body.BrideFatherAge,
        BrideFatherOccupation:req.body.BrideFatherOccupation,
        BrideFatheraddress:{
            Street:req.body.BrideFatheraddress.Street,
            village:req.body.BrideFatheraddress.village,
            Taluk:req.body.BrideFatheraddress.Taluk,
            District:req.body.BrideFatheraddress.District,
            State:req.body.BrideFatheraddress.State,
            Country:req.body.BrideFatheraddress.Country,
            Pincode:req.body.BrideFatheraddress.Pincode
        },
        BrideMotherName:req.body.BrideMotherName,
        BrideMotherreligion: req.body.BrideMotherreligion,
        BrideMLivingStatus:req.body.BrideMLivingStatus,
        BrideMotherAge:req.body.BrideMotherAge,
        BrideMotherOccupation: req.body.BrideMotherOccupation,
        BrideMotheraddress:{
            Street:req.body.BrideMotheraddress.Street,
            village:req.body.BrideMotheraddress.village,
            Taluk:req.body.BrideMotheraddress.Taluk,
            District:req.body.BrideMotheraddress.District,
            State:req.body.BrideMotheraddress.State,
            Country:req.body.BrideMotheraddress.Country,
            Pincode:req.body.BrideMotheraddress.Pincode
        },
     
        placeofmarriage:
        {
            Name:req.body.placeofmarriage.Name,
            Street:req.body.placeofmarriage.Street,
            village:req.body.placeofmarriage.village,
            Taluk:req.body.placeofmarriage.Taluk,
            District:req.body.placeofmarriage.District,
            State:req.body.placeofmarriage.State,
            Country:req.body.placeofmarriage.Country,
            Pincode:req.body.placeofmarriage.Pincode
        },  
        MarriageDate:req.body.MarriageDate,
        //MarriageNotes:req.body.MarriageNotes,
        whosolemnizedmarriage:req.body.whosolemnizedmarriage,
        Addressofsolemnized:
        {
            Street:req.body.Addressofsolemnized.Street,
            village:req.body.Addressofsolemnized.village,
            Taluk:req.body.Addressofsolemnized.Taluk,
            District:req.body.Addressofsolemnized.District,
            State:req.body.Addressofsolemnized.State,
            Country:req.body.Addressofsolemnized.Country,
            Pincode:req.body.Addressofsolemnized.Pincode
        },
       Bridemother:req.body.Bridemother,
       BrideFather:req.body.BrideFather,
       BrideFatherGroom:req.body.BrideFatherGroom,
       BridemotherGroom:req.body.BridemotherGroom,

       //Witness:req.body.Witness,
       Witnessname:req.body.Witnessname,
       Witnessrelation:req.body.Witnessrelation,
       Witnessaddress:{
       Street:req.body.Witnessaddress.Street,
       village:req.body.Witnessaddress.village,
       Taluk:req.body.Witnessaddress.Taluk,
       District:req.body.Witnessaddress.District,
       State:req.body.Witnessaddress.State,
       Country:req.body.Witnessaddress.Country,
       Pincode:req.body.Witnessaddress.Pincode
       },
       Identitynumber:req.body.Identitynumber,

       Passport:req.body.Passport,  
       Marksheet:req.body.Marksheet,
       RationCard:req.body.RationCard,
       Aadharcard:req.body.Aadharcard,
      Voterid:req.body.Voterid,
      DrivingLicence:req.body.DrivingLicence,
      PassportSizePhotograph:req.body.PassportSizePhotograph,
      DivorceCopy:req.body.DivorceCopy,
      FirstMarriageCertificate:req.body.FirstMarriageCertificate,
      SpouseDeathCertificate:req.body.SpouseDeathCertificate,
      SingleStatusCertificate:req.body.SingleStatusCertificate,

       BridePassport:req.body.Passport,  
       BrideMarksheet:req.body.Marksheet,
       BrideRationCard:req.body.RationCard,
       BrideAadharcard:req.body.Aadharcard,
       BrideVoterid:req.body.Voterid,
       BrideDrivingLicence:req.body.DrivingLicence,
       BridePassportSizePhotograph:req.body.PassportSizePhotograph,
       BrideDivorceCopy:req.body.DivorceCopy,
       BrideFirstMarriageCertificate:req.body.FirstMarriageCertificate,
       BrideSpouseDeathCertificate:req.body.SpouseDeathCertificate,
       BrideSingleStatusCertificate:req.body.SingleStatusCertificate,

       Invitation:req.body.Invitation,  
       MarriageReceipt:req.body.MarriageReceipt,
       Moreattach:req.body.Moreattach,
       Declaration:req.body.Declaration,
       Otherservices:req.body.Otherservices,
       Subservices:req.body.Subservices 
    
    });
    console.log("test");
    // Save Product in the database
    reg.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the product."
        });
    });
});
router.put('/:id',function(req,res,next){ 
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Find and update product with the request body
    Register.findByIdAndUpdate({_id:req.params.id}, {
        Name: req.body.Name, 
        Nationality: req.body.Nationality,
        ResidentialStatus: req.body.ResidentialStatus,
        Religion: req.body.Religion,
        Caste:req.body.Caste,
        DOB: req.body.DOB,
        Employername: req.body.Employername,
        Designation:req.body.Designation,
        MaritalStatusBeforeMarriage: req.body.MaritalStatusBeforeMarriage,
        Mobileno: req.body.Mobileno,
        whatsappnumber:req.body.whatsappnumber,
        Email: req.body.Email,
        ResiAddress:req.body.ResiAddress,
        Passportno: req.body.Passportno,
        Fathername:req.body.Fathername,
        Fatherreligion: req.body.Fatherreligion,
        LivingStatus:req.body.FLivingStatus,
        FatherAge: req.body.FatherAge,
        FatherOccupation:req.body.FatherOccupation,
        FatherAddress: req.body.FatherAddress,
        MotherName:req.body.MotherName,
        Motherreligion: req.body.Motherreligion,
        MLivingStatus:req.body.MLivingStatus,
        MotherAge:req.body.MotherAge,
        MotherOccupation: req.body.MotherOccupation,
        MotherAddress:req.body.MotherAddress,
        Gender:req.body.Gender
    }, {new: true})
    .then(Register => {
        if(!Register) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        res.send(Register);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.id
        });
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
module.exports=router;  