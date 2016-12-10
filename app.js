var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var routes = require('./routes');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Routes 
// homes
app.get('/', routes.home);
//book_single
app.get('/Book/:book_number?', routes.book_single);
//notfound
app.get('*', routes.notFound);
app.listen(3000, function () {
    console.log("the application is running on localhost");
});