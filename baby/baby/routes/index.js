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
        token = req.body.data.babyFormToken;
    }
    res.render('index', { message: '', token: token });
});


router.post('/home/reiver', function(req, res, next) {
    var ret = req.body.data;
    console.log(req.body.data);
    if(!ret.succ){
        message = ret.message;
    }
    res.render('index', { message: message, token: ret.data.token.babyFormToken });
})


module.exports = router;
