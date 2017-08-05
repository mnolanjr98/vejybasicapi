/**
 * Created by mikenolan on 8/4/17.
 */
let express = require('express');
let app = express();

app.get('/index', function(request, response) {
   response.json({"hello": "world"});
});

app.listen(8080);