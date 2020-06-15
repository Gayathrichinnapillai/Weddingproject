const db=require("../dbconnection")

const userschema=new db.Schema({
    Firstname:{type:String,required:true},
    Lastname:{type:String,required:true},
    Emailid:{type:String,required:true,
        createIndexes: {
            unique: true,
        }
        },      
    Password:{type:String,required:true},
    Phonenumber:{type:Number,required:true}, 
    Createdon:{type:Date,default: Date.now}   
})

module.exports=db.model('Weddingregistration',userschema);