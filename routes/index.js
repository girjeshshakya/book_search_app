var bookJson = require('../book.json');
// Routes 
// home
exports.home = function (req, res) {
    var books = bookJson.books;
    res.render('home', {
        title: 'book library'
        , books: books
    });
};
//book_single
exports.book_single = function (req, res) {
    res.send("this is server response for Book" + book_num);
};
//notFound
exports.notFound = function (req, res) {
    res.send("this is not the page yiou are looking for");
};