const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	res.setHeader('Content-Type', 'text/html');

	let path
})