const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('on-sale', {
        title: 'SALE',
        isSale: true
    });
});

module.exports = router;