let express = require('express');

let app = express();

app.get('/api/whoami', function(req, res){
	let lang = req.acceptsLanguages()[0];
	let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	let operatingsystem = req.headers['user-agent'].split('(')[1].split(')')[0];
	res.end(JSON.stringify({'ipaddress': ip, 'language': lang, 'OS': operatingsystem}));
});

app.get('*', function(req, res){
	res.end('go to "https://reqheaderparserms.herokuapp.com/api/whoami" to test the service');
});

app.listen(process.env.PORT || 5000, function(){
	console.log('listening on port ' + process.env.PORT || 5000);
});

