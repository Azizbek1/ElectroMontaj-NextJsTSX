const Router = require("express");
const router = new Router()
const AuthContorller = require('../controllers/AuthController')
const { check } = require("express-validator");

router.post('/registration',
    [
        check('email', "Неправильный адрес электронной почты").isEmail(),
        check('password', 'Пароль должен быть длиннее 5 и короче 12').isLength({ min: 5, max: 12 })
    ],
    AuthContorller.createAuth
)

router.post('/login', AuthContorller.loginAuth)

module.exports = router
