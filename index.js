const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('views engine', 'hbs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('home');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});