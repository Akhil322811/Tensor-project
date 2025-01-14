const passport = require('passport')
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:"client id",
    clientSecret:"client sceret",
    callbackURL: "http://localhost:3333/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser(function(user,cb){
  cb(null,user)
})

passport.deserializeUser(function(obj,cb){
   cb(null,obj)
})