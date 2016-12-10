var express = require('express');
var app = express();
app.set('view engine', 'ejs');
// Routes 
// home routes
app.get('/', function (req, res) {
    res.render('home', {
        title:'book library',
        books:['first book', 'second book', 'third book']
    });
});
//book single
app.get('/Book/:book_number?', function (req, res) {
    var book_num = req.params.book_number;
    res.send("this is server response for Book" + book_num);
});
//not found
app.get('*', function (req, res) {
    res.send("this is not the page yiou are looking for");
});
app.listen(3000, function () {
    console.log("the application is running on localhost");
});