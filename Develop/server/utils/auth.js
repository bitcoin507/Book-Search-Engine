const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: (req, res, next) => {
    // check if there is a token in the header
    const token = req.headers.authorization;
    if (token) {
      // verify token
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          res.status(401).json({
            message: 'Invalid token',
          });
        } else {
          // if token is valid, set the user to the decoded token
          req.user = decoded;
          next();
        }
      } );
    } else {
      res.status(401).json({
        message: 'No token provided',
      });
    }


  
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
