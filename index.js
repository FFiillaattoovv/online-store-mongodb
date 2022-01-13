const express = require('express');
const expressHandlebars = require('express-handlebars');

const homeRouter = require('./routes/home');
const coursesRouter = require('./routes/courses');
const addCourseRouter = require('./routes/add-course');

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
app.use('/courses', coursesRouter);
app.use('/add-course', addCourseRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});