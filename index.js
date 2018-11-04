var express = require('express');
var app = express();


var port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get('/',function(req,res){
       
  res.sendFile('index.html');

});

app.listen(port, function () {
  console.log('Example app listening on port '+ port);
});