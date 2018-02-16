const express= require('express');
const router = express.Router();
const Contact = require('../models/contacts');

router.get('/contacts/:phone', (req, res, next) =>{
   
    Contact.find({phone: req.params.phone}, function(err, contacts){
        if(err){
            res.json({msg: "contact not found"});
        }
        else{
            res.json(contacts);
        }
    });
});



router.post('/contact', (req, res, next)=>{
    let newContact = new Contact({
        name : req.body.name,
        age : req.body.age,
        phone : req.body.phone,
        gender : req.body.gender
    });


    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'failed to add'});
        }
        else{
            res.json({msg: 'Contact added'});
        }
    });

});

router.get('contact')



module.exports = router;