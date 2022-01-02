const express = require('express');
const expressHandlebars = require('express-handlebars');

const homeRouter = require('./routes/home');
const cellphonesRouter = require('./routes/cellphones');
const xiaomiRouter = require('./routes/xiaomi');
const smartHomeAndGadgetsRouter = require('./routes/smart-home-and-gadgets');
const onSaleRouter = require('./routes/on-sale');

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

app.use('/', homeRouter);
app.use('/cellphones', cellphonesRouter);
app.use('/xiaomi', xiaomiRouter);
app.use('/smart-home-and-gadgets', smartHomeAndGadgetsRouter);
app.use('/on-sale', onSaleRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});