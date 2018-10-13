var mongoose = require('mongoose');
 
var Author = require('./author');
var Book = require('./book');
 
mongoose.connect('mongodb://Basu:Basu%40480478143@ds135441.mlab.com:35441/basuhadimani94', function (err) {
    if (err) throw err;
     
    console.log('Successfully connected');
     
    var jamieAuthor = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Jamie',
            lastName: 'Munro'
        },
        biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
        twitter: 'https://twitter.com/endyourif',
        facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
    });
 
    jamieAuthor.save(function(err) {
        if (err) throw err;
         
        console.log('Author successfully saved.');
         
        var mvcBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
            author: jamieAuthor._id,
            ratings:[{
                summary: 'Great read'
            }]
        });
         
        mvcBook.save(function(err) {
            if (err) throw err;
         
            console.log('Book successfully saved.');
        });
         
        var knockoutBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
            author: jamieAuthor._id
        });
         
        knockoutBook.save(function(err) {
            if (err) throw err;
         
            console.log('Book successfully saved.');
        });
    });
});