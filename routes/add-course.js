const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('add-course', {
        title: 'Add course',
        isXiaomi: true
    });
});

module.exports = router;