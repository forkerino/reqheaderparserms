let express = require('express');

let app = express();

app.get('/api/whoami', function(req, res){
	
	
});

app.listen(process.env.PORT || 5000, function(){
	console.log('listening on port ' + process.env.PORT);
})