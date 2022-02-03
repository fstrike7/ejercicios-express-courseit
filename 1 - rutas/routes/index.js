var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', (req, res, next) => {
  const person = {
    name: 'Juani',
    surname: 'Gallo'
  }
  res.json(person)
})

module.exports = router;
