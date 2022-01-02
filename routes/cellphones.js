const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('cellphones', {
        title: 'Cellphones',
        isCellphones: true
    });
});

module.exports = router;