const { check } = require('express-validator');
const{validatorResult}= require('../helpers/validateHelper')


const validateCreate=[

    check(username)
    .exists()
    .not()
    .isEmpty(),
    check(email)
    .exists()
    .isEmail(),
    check(password)
    .
]

module.exports={ validateCreate }