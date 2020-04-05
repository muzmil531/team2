const mongoose=require('mongoose');
const Admin=mongoose.model('Admin');

module.exports.register = (req,res,next)=>{
    console.log('Inside register fuction');
    var admin=new Admin();
    admin.fullName=req.body.fullName;
    admin.email=req.body.email;
    admin.password=req.body.password;
    admin.save((err,doc)=>{
        if(!err)
            res.send(doc);
        else
            if (err.code=11000)
                res.status(422).send(['Duplicate email address found.']);
            else
                return next(err);
    })
}