const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('xiaomi', {
        title: 'Xiaomi',
        isXiaomi: true
    });
});

module.exports = router;