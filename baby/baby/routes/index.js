var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Post home page. */
router.post('/home', function(req, res, next) {
    // console.log(req.body);
    // console.log(req.body.data[0]);
    res.render('index', { title: '宝贝助手' });
});


router.post('/home/reiver', function(req, res, next) {
    var message = "";
    if(!req.body.data.succ){
        message = req.body.data.message;
    }
    res.render('index', { message: message , identificationNumber: req.body.data.data.identificationNumber, email: req.body.data.data.email });
})


module.exports = router;
