var express = require('express');
var router = express.Router();
/*var passport = require('passport');
require('../config/passport')(passport);*/
var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = function(passport){
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Yuvata', user: req.user });
});
router.get('/', function(req, res, next) {
	  res.render('login', { title: 'Yuvata' });
	});

router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }

    res.json(posts);
  });
});

router.post('/posts', function(req, res, next) {
	  var post = new Post(req.body);

	  post.save(function(err, post){
	    if(err){ return next(err); }

	    res.json(post);
	  });
});
// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/home',
        failureRedirect : '/'
    }));
return router;
}