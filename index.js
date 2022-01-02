const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        isHome: true
    });
});

app.get('/cellphones', (req, res) => {
    res.render('cellphones', {
        title: 'Cellphones',
        isCellphones: true
    });
});

app.get('/xiaomi', (req, res) => {
    res.render('xiaomi', {
        title: 'Xiaomi',
        isXiaomi: true
    });
});

app.get('/smart-home-and-gadgets', (req, res) => {
    res.render('smart-home-and-gadgets', {
        title: 'Smart home and gadgets',
        isSmartHomeAndGadgets: true
    });
});

app.get('/on-sale', (req, res) => {
    res.render('on-sale', {
        title: 'SALE',
        isSale: true
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});