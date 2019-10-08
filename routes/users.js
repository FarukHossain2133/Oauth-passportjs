var express = require('express');
var router = express.Router();
const passport = require('passport')
const passportSetup = require('../config/passport-setup')

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/login', (function(req, res, next) {
  res.render('login', {title: 'Login page', user: req.user})
}))

// auth logout
router.get('/logout', (req, res, next) => {
  //  handle with passport
   req.logout();
  res.redirect('/users/login')
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res, next) => {
    
   res.redirect('/profile');
  // res.send(req.user)
})



module.exports = router;
