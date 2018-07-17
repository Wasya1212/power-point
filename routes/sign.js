const router = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

router
  .get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
  }), (req, res) => {
    res.json({message: "hello world"});
  })
  .get('/auth/google/redirect', passport.authenticate('google'))
  .get('/auth/local/login', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: 'post created',
          authData
        });
      }
    });
    res.send('SUCCESS token');
  })
  .post('/login', (req, res, next) => {
    const user = {
      id: 1,
      email: 'leonardo.1212@yandex.ua',
      password: 'wasya1212'
    };

    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
      res.json({
        token
      });
    });
  });

// FORMAT OF TOKEN: BEARER <ACCESS_TOKEN>

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];

    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;
