var express = require('express');
var router = express.Router();

const juani = {
    name: 'Juani',
    surname: 'Gallo'
}
const bel = {
    name: 'Belen',
    surname: 'Rey'
}
const goncy = {
    name: 'Gonzalo',
    surname: 'Pozzo'
}
const persons = [juani, bel, goncy]

router.get('/', (req, res, next) => {
    res.json(persons)
})
router.get('/cantidad', (req, res, next) => {
    const body = {
        qty: `${persons.length}`
    }
    res.json(body)
})

module.exports = router;
