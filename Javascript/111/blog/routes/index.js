var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';

router.use(async (req, res, next) => {
  const client = new MongoClient(uri);
  const database = client.db('blog');
  req.posts = database.collection('posts');

  next();
});


/* GET home page. */
router.get('/', async (req, res, next) => {
  const posts = await req.posts.find().toArray();
  res.render('layout',
    {
      subtitle: 'Posts',
      posts,
      partials: {
        content: 'index'
      }
    });
});

router.get('/addPost', (req, res, next) => {

  res.render('layout',
    {
      subtitle: 'Add Post',
      partials: {
        content: 'addPost'
      }
    });
});

router.post('/addPost', async (req, res, next) => {
  try {
    const { title, body } = req.body;
    await req.posts.insertOne({ title, body, author: 'Chayala', date: new Date() });
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});
module.exports = router;
