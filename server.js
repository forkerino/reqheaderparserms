let express = require('express');

let app = express();

app.get('/api/whoami', function(req, res){
	let lang = req.acceptsLanguages()[0];
	let ip = req.ip;
	let operatingsystem = req.headers['user-agent'].split('(')[1].split(')')[0];
	res.end(JSON.stringify({'ipaddress': ip, 'language': lang, 'OS': operatingsystem}));
});

app.listen(process.env.PORT || 5000, function(){
	console.log('listening on port ' + process.env.PORT || 5000);
});

