import passport from "passport";
import UserDetail from "../models/User.js";
import session from "express-session";
import express from "express";
import bodyParser from "body-parser";

export default function LoginRoutes(app){

    
app.use(
    session({
      secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
    })
  );
  app.use(express.json());
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(bodyParser.urlencoded({ extended: false }));
  passport.use(UserDetail.createStrategy());
  
  passport.serializeUser(UserDetail.serializeUser());
  passport.deserializeUser(UserDetail.deserializeUser());


    app.post(
        "/api/login",
        function (req, res, next) {
          console.log("routes/user.js, login, req.body: ");
          console.log(req.user);
          next();
        },
        passport.authenticate("local"),
        (req, res) => {
          console.log("logged in", req.user);
          var userInfo = {
            username: req.user.username,
          };
          console.log(userInfo);
          res.send(userInfo);
        }
      );
      
      app.get("/api/user", (req, res, next) => {
        console.log("===== user!!======");
        console.log(req.user);
        if (req.user) {
          res.json({ user: req.user });
        } else {
          res.json({ user: null });
        }
      });
      
      app.get("/api/logout", (req, res) => {
        if (req.user) {
            req.logout(function(err) {
                if (err) { return next(err); }
                // res.redirect('/');
              });
          res.send({ msg: "logging out" });
        } else {
          res.send({ msg: "no user to log out" });
        }
      });
      
      app.post("/api/register",async function (req, res) {
        console.log(req.body);
        const f =await UserDetail.find({username: req.body.username})
        console.log("f",f)
        if(f.length === 0){
            UserDetail.register(
                { username: req.body.username },
                req.body.password,
                function (err, user) {
                  if (err) {
                    console.log(err);
                    res.send()
                  }
                }
              );
              return res.send({status: true})
        }
        return res.send({status: false, msg: "user already exists"})
        
      });



}