const User = require('../models/user')
const express=  require('express');

const router = express.Router();    


router.get('/getusers', function(req, res) {
  User.find({}).then(data=>{
    res.json( data  );
  }).catch(e => res.status(500).send(e))
});

router.post('/saveuser',function(req,res){

  User.create(req.body).then(function(con){
    res.send(con);
    }).catch(e => res.status(500).send(e))
})

module.exports= router;