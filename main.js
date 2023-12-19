const express = require('express'),
    app = express(),
    homeController = require('./controllers/homeController');

app.set('port', process.env.PORT || 3000);

// body parsing
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index');
});

app.get('/courses', homeController.showCourses);
app.get('/contact', homeController.showContact);
app.post('/contact', homeController.postSignUpForm);

app.listen(app.get('port'), () => {
    console.log(`Server listen on port ${app.get('port')}`);
});
