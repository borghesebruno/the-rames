const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

let rames = [
    {
        quem: 'Bruninho',
        quantos: 1000000
    },
    {
        quem: 'Thiago',
        quantos: 10
    },
    {
        quem: 'Fabio',
        quantos: 1000
    }
];

app.get('', (req, res, next) => {
    res.render('main', {
        rames: rames
    });
});

app.listen(3000);