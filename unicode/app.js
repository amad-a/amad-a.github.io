


const express = require('express');
const app = express();
const path = require("path");
//const hbs = require("hbs");
app.set('view engine', 'hbs');
let text;



const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
//app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');




//const myName = 'myName';




app.use(express.urlencoded({ extended: false }));


//const myName = '';

app.get('/', function(req, res) {
	res.render('simple-form', {'myName':myName});
});


app.post('/', function(req, res) {
	console.log(req.body);
	//var id = req.body.id;
	myName = req.body.myName;
	res.redirect('/');
});




app.listen(3000);
console.log('Started server on port 3000')