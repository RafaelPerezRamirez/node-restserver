require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.send('Hola pinche putita')
})
app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    }
})
app.put('/usuario', function(req, res) {
    res.send('Put Hola pinche putita')
})
app.delete('/usuario', function(req, res) {
    res.send('Delete Hola pinche putita')
})

app.listen(process.env.PORT, () => {
    console.log("Escucha mi prro");
})