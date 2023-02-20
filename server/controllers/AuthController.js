const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require("express-validator")
class AuthContorller {
    async createAuth(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Неверный запрос", errors })
            }
            const { email, password } = req.body
            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: `Пользователь с электронной почтой ${email} уже существует` })
            }
            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({ email, password: hashPassword })
            await user.save()
            res.json({ message: "Пользователь создан" })
        } catch (e) {
            res.send({ message: "Ошибка сервера2" })
        }
    }
    async loginAuth(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).json({ message: "User not found" })
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({ message: "Invalid password" })
            }
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e)
            res.send({ message: "Server error" })
        }
    }



}

module.exports = new AuthContorller()