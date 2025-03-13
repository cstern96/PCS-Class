const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    const name = req.cookies.name || '';
    res.locals.name = name;

    res.cookie('name', name, {
        maxAge: 20000
      });    
      next();
});

router.get('/', (req, res) => {
    res.render('layout', {
        partials: { content: 'about' },
        name: res.locals.name,
        visits: res.locals.visits
    });
});

router.post('/save-name', (req, res) => {
    const newName = req.body.name || '';
    res.cookie('name', newName, { maxAge: 20000 });
    res.redirect('/about'); // Redirect back to the about page
});


module.exports = router;