const { check } = require('express-validator')
const { validateResult } = require('../helpers/validate.helper')

const validateCreate = [
    check('name')
    .exists(),
    check('identification')
    .exists(),
    check('email')
    .exists()
    .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }