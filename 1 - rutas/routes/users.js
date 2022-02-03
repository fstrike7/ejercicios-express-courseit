var express = require('express');
var router = express.Router();

const juani = {
    name: 'Juani',
    surname: 'Gallo',
    age: 30
}
const bel = {
    name: 'Belen',
    surname: 'Rey',
    age: 30
}
const goncy = {
    name: 'Gonzalo',
    surname: 'Pozzo',
    age: 27
}

const pepe = {
    name: 'Pepe',
    surname: 'Argento',
    age: 45
}

const faus = {
    name: 'Faustino',
    surname: 'Beatrice',
    age: 19
}

const persons = [juani, bel, goncy, pepe, faus]

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
