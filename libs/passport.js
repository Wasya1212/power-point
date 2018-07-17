const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const config = require('config');

let googleKeys = config.get('google');

passport.use(new GoogleStrategy(
  {
    callbackURL: 'http://localhost:3000/api/auth/google/redirect',
    clientID: googleKeys.clientID,
    clientSecret: googleKeys.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    // console.log(profile);
  }
));
