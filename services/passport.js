/**
 * @author Philip Van Raalte
 * @date 2017-09-18.
 */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('AT', accessToken);
      console.log('RT', refreshToken);
      console.log('Profile', profile);
    }
  )
);