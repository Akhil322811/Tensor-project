const passport = require('passport')
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:"643199264313-143dahjm6bfkfd1af1ltugo2u2rl9s1l.apps.googleusercontent.com",
    clientSecret:"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",
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