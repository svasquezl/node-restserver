require('../server/config/config');

const express = require('express');
const mongoose = require('mongoose');


const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.use(require('./routes/usuario'));

mongoose.connect('mongodb+srv://admin:L7nraIk3furUkdp6@cluster0.wawjm.mongodb.net/cafe', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;

    console.log('Base de datos online');

});

app.listen(process.env.PORT, () => {
    console.log(`Escucnado puerto ${process.env.PORT}`);
})

//usermongo atlas
// user: admin
//pass: L7nraIk3furUkdp6
// mongodb+srv://admin:L7nraIk3furUkdp6@cluster0.wawjm.mongodb.net/cafe