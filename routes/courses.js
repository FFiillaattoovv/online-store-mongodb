const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('courses', {
        title: 'Courses',
        isCellphones: true
    });
});

module.exports = router;