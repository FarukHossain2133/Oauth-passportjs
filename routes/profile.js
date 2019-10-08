const express = require('express');
const router = express.Router();

 const authCheck = (req, res, next) => {
      if(!req.user){
          // if user is not logged in
         return res.redirect('/users/login')
      }
      next()
 }

router.get('/', authCheck, (req, res, next) => {

    res.render('profile', {
        title: 'profile page',
        user: req.user
    })
});


module.exports = router;