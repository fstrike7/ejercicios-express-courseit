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

const users = [juani, bel, goncy, pepe, faus]

router.get('/', (req, res, next) => {
    res.json(users)
})
router.get('/cantidad', (req, res, next) => {
    const body = {
        qty: `${users.length}`
    }
    res.json(body)
})

router.post('/', (req, res) => {
    const { body } = req
    const { name, surname, age } = body
    if (body && name && surname && age) {
        users.push(body)
        return res.sendStatus(201)
    } else {
        return res.sendStatus(400)
    }
})

module.exports = router;
