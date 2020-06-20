const bodyparser = require("body-parser"); 
const express = require("express"); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
const cors = require('cors'); 
const fs = require('fs');
const session = require('express-session');



// app.use(cors({origin:['http://127.0.0.1:5501'], credentials:true}))
app.use(cors({origin:['localhost:3000'], credentials:true}))

app.use(bodyparser.json());
app.use(session({
  secret: "backend",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 180,
  }
}))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
 });
 app.use(bodyparser.urlencoded({ extended: true }));

   var path = require('path')
   app.use('/assets', express.static(path.join(__dirname, "./assets")));
   app.use('/js', express.static(path.join(__dirname, "./js")));


   app.get("/booking", (req, res) => {
    res.sendFile(__dirname + "/booking.html");
   });

let users;
   fs.readFile('users_information.json', (err,data)=> {
     if(err) {
       console.log(err);
     } else {
        users = JSON.parse(data);
        console.log('users');
        console.log(users);
     }
   })


   app.post("/login", function(req,res){
    let isLogged = false
    users.forEach(el => {
      if(el.email === req.body.username && el.password === req.body.password) {
      console.log(`${el.email} - ${req.body.username} |||  ${req.body.password} - ${req.body.password}`)
        isLogged = true;
        console.log('zgadza sie');
      }
     })
     if(isLogged){
      return res.status(200).send('');
     } else {
       return res.status(500).send({error:"Bad login data"})
     }

  });

  app.get('/getSession', (req,res)=>  {
      console.log(req.session);
      return res.status(200).send(req.session);
  })

  app.listen(3000, ()=>{
    console.log('uruchomiono');
  })