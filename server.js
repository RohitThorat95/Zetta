var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose     = require('mongoose');

// requiring routes
var users    = require('./routes/users');
var pictures = require('./routes/pictures')

// database connection
var dbPath = "mongodb://rohit:12345@ds113169.mlab.com:13169/zettabyte"

mongoose.connect(dbPath);

mongoose.connection.on('connected',() => {
  console.log("Database Connected to mlab");
});
mongoose.connection.on('error',() => {
  console.log("Trouble Connecting to mlab");
});

// port declaration
var port = process.env.PORT || 8080;


//parsing middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// user routes
app.use('/', users);

// pictures routes
app.use('/pic', pictures);

// App Listening
app.listen(port, () => {
  console.log(`Server is available on PORT : ${port} `);
});
