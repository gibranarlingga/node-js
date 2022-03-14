const express = require('express');

const app = express();
const PORT = 5000;

const islogin = false;
let blogs = [];

app.set('view engine', 'hbs');


app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/', function(req, res) {
    let data = req.body;
    blogs.push(data)
    res.redirect('/blog');
});


app.get('/blog', function(req, res) {
    console.log(blogs)
    res.render('blog', { islogin });
});

// app.post('/blog', function(req, res) {
//     let data = req.body;
//     blogs.push(data)
//     res.redirect('/blog');
// });

app.get('/Contact-me', function(req, res) {
    res.render('Contact-me');
});

app.get('/detail/:id', function(req, res) {
    let id = req.params.id
    res.render('detail', { id: id });
});

app.listen(PORT, function() {
    console.log(`Server starting on PORT: ${PORT}`);
});