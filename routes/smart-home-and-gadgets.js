const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('smart-home-and-gadgets', {
        title: 'Smart home and gadgets',
        isSmartHomeAndGadgets: true
    });
});

module.exports = router;