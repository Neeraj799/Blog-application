const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.get('/blog', (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })

});

router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blog')
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/blogs/create', (req, res) =>{
    res.render('create', { title: 'Create a new Blog'});
})



router.get('/blog/:id',(req, res) => {
    const id =req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details',{ blog: result, title: 'Blog Details'});
        })
        .catch(err => {
            console.log(err);
        });
})

router.delete('/blog/:id',(req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/blog'})
    })
    .catch(err => {
        console.log(err);
    })
})



module.exports = router;