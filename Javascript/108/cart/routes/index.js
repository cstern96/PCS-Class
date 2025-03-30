var express = require('express');
var router = express.Router();
const items = require('../items.js');

console.log('in index', items);

/* GET home page. */
router.get('/', async function (req, res, next) {
  try{
  const receivedItems = await items(req, res, next);
  res.render('layout', {
    title: 'Take home a pet today!',
    items: receivedItems,
    partials: {
      content: 'index'
    }
  });
  } catch(e) {
    next(e);
  }
});
router.post('/', async (req, res, next) => {
  console.log('post');router.post('/', async (req, res, next) => {
    console.log('post');
    try {
        const [results] = await pool.execute('SELECT id, name, price, description FROM users WHERE category = ?', [req.body.search]);
  
        if (results.length) {
            console.log('found category');
            return res.render('layout', {
                title: 'Search Results',
                items: results,
                partials: {
                    content: 'index'
                }
            });
        } else {            
            return res.render('layout', {
                title: 'No Results Found',
                items: [],
                partials: {
                    content: 'index'
                }
            });
        }
  
    } catch (e) {
        next(e);
    }
  });
    try {
        const [results] = await pool.execute('SELECT id, name, price, description FROM users WHERE category = ?', [req.body.search]);

        if (results.length) {
            console.log('found category');
            //req.session.id = req.body.id;

            return results;
        }

        
    } catch (e) {
        next(e);
    }
});



module.exports = router;
