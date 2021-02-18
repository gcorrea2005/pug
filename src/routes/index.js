const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'First website' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Page Contact' });
});

// Handle 404
router.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});

module.exports = router;
