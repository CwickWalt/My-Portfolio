const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sendRoutes = require('./routes/send');
const app = express();

app.use(cors());

app.use(express.static(__dirname + '/../dist/angular-frontend'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PATCH, DELETE, OPTIONS"
	);
	next();
});

app.use('send', sendRoutes);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/angular-frontend/index.html'));
});

module.exports = app;