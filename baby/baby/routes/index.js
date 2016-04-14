var express = require('express');
var router = express.Router();

/* GET home page. test */
// router.get('/home', function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });

/* Post home page. */
router.post('/home', function(req, res, next) {
    console.log(req.body);
    var token = "";
    if(!req.body.data.succ){
        token = req.body.data.token;
        secret = req.body.data.secret;
    }
    res.render('index', { message: '', token: token, secret: secret });
});


router.post('/home/reiver', function(req, res, next) {
    var ret = req.body.data;
    token = ret.data.token;
    secret = ret.data.secret;
    console.log(req.body.data);
    if(!ret.succ){
        message = ret.message;
    }
    res.render('index', { message: message, token: token, secret: secret });
})


module.exports = router;
