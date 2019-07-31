var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const configurePassport = require("./configures/passport");
const passport = require('passport');
var authRouter = require('./auth');
const session = require("express-session");

var port = process.env.PORT || 4200;

configurePassport();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('access-Control-Allow-Origin', '*');
    next();
});

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRouter);
app.use((req, res, next) => {
    if (!req.user)
        res.redirect("/auth")
    else
        next();
});
app.get('/user', function(req, res){
    if(req.user.id === "1"){
        var jsn = {
            displayName: "user1@example.com",
            exp: 1564478117,
            firstName: "user1@example.com",
            iat: 1564474517,
            id: "5d40135be04be0f13756f2b9",
            jti: "2fabe815-4c9b-4da6-8dda-ce8d2eb566d1",
            lastName: "user1@example.com",
            mail: "user1@example.com"
        } 
    res.send(jsn);
    } else {
        res.send(req.user);
    }
});
app.use('/', express.static(__dirname + '/public'));


http.listen(port, function(){
    console.log('listening on *: ' + port);
});