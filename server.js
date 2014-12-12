
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Routes
//--------------------------------------

// sample route
app.get('/sample', function(req,res){
	res.send("what is up?! i'm the sample!");
})


// the RESTFUL and app routes are here
//--------------------------------------

//first we need to create an instance of a router for our app
var router = express.Router();

router.get('/', function(req, res){
	res.send("you are at the home page now!");
});

router.get('/about', function(req,res){
	res.send("now are are at the about page!");
});


//calling this command allws us to use the router for our application
app.use('/', router);

app.listen(port);
console.log("Magic is happening at this port " + port);
