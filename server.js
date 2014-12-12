
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

app.route('/login')

	.get(function(req, res){
		res.send("this would render a login form")
	})

	.post(function(req, res){
		console.log('processing your request...');
		res.send('we are processing the login form!');
	});

//first we need to create an instance of a router for our app
var router = express.Router();

router.use(function(req, res, next){
	console.log(req.method, req.url);

	next();
});

router.get('/', function(req, res){
	res.send("you are at the home page now!");
});

router.param('name', function(req, res, next, name){
	//this is an example of where you could do validations on the parameters entered 
	console.log('this is where we would do a validation on the name ' + name);

	req.name = name;

	next();
});

router.get('/hello/:name', function(req, res){
	res.send('hello ' + req.params.name + '!');
});

router.get('/about', function(req,res){
	res.send("now are are at the about page!");
});


//calling this command allows us to use the router for our application
app.use('/', router);

app.listen(port);
console.log("Magic is happening at this port " + port);
