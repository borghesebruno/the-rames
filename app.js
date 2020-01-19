const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*let rames = {
  Bruninho: 'Ad infinitum',
  Thiago: '10',
  Fabio: '1000',
  Renan: '10002',
  Ilson: '1000',
  Natasha: '1000',
  Daniel: '1000',
  Tania: '1000'
};*/

let rames = JSON.parse(fs.readFileSync('rames.json'));

app.get('', (req, res, next) => {
    res.render('main', {
        rames: rames
    });
});

app.post('', (req, res, next) => {
    console.log(req.body);

    if(req.body.Bruninho) {
        rames = req.body;
        fs.writeFileSync('rames.json', JSON.stringify(rames));
    }
    
    res.render('main', {
        rames: rames
    });
});

app.listen(3000);