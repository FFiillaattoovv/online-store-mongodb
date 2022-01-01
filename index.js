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
    res.render('home');
});

app.get('/cellphones', (req, res) => {
    res.render('cellphones');
});

app.get('/xiaomi', (req, res) => {
    res.render('xiaomi');
});

app.get('/smart-home-and-gadgets', (req, res) => {
    res.render('smart-home-and-gadgets');
});

app.get('/on-sale', (req, res) => {
    res.render('on-sale');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});