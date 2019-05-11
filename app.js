var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const url = "mongodb://localhost:27017/mydb";
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});

var app = express();

app.use(logger("dev"));
app.use(express.json()); // same as bodyParser.json()
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("my-secret-key"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    name: "session-id",
    secret: "secret-key",
    saveUninitialized: false,
    resave: false,
    store: new fileStore()
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.use(auth);

module.exports = app;
