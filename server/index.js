const express = require("express")
const session = require("express-session")
const passport = require('passport')
//const dotenv = require("dotenv")
const path = require("path")
const cors = require('cors')
const connectDatabase = require("./Connect_db")
const feedbackRoute = require("./routes/feedback")


require("./Authentication")

// 
// import "./auth.js";
const port =3333;

const app = express()
app.use(cors({
    origin:"*",
    Credential:true
  }))
app.use(express.json())


app.use(session({
  secret: "Mysecret!!",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(passport.initialize())
app.use(passport.session())
// app.use(connectDatabase)

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/pro',
        failureRedirect: '/failed'
}));

app.get("/pro",(req,res)=>{
user = req.user


res.redirect('http://localhost:3000/feedback')
})
connectDatabase()
app.use("/api" , feedbackRoute)

// app.use(userRouter)
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})