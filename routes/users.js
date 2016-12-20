var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', (req,res)=> {
  if(!isNaN(req.params.id)) {
    User.getOne(req.params.id).then(user => {
      if(user) {
        res.json(user);
      } else {
        resError(res, 404, 'User Not Found');
      }
    });
  } else {
    resError(res, 500, 'Invalid ID');
  }
});

router.get('/:id/team', (req,res)=>{
  if(!isNaN(req.params.id)) {
    Team.getByUser(req.params.id).then(teams => {
      if(teams.length > 1) {
        res.json(teams);
      } else {
        res.status(400);
        res.json(teams);
      }
    });
  } else {
    resError(res, 500, 'Invalid ID');
  }
});

module.exports = router;
