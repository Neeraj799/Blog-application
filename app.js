const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Kohli is a criket player', snippet: 'He is one of top player in the world'},
        {title: 'Kohli is best player', snippet: 'He is a first in icc rankings'},
        {title: 'Kohli is a good player', snippet: 'he is good in batting and fielding'},
    ];
    res.render('index',{ title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about',{ title: 'About'});
});

app.get('/blogs/create',(req, res) => {
    res.render('create',{ title: 'Create'})
});

//404 page
app.use((req, res) =>{
    res.status(404).render('404',{ title: '404'});
});