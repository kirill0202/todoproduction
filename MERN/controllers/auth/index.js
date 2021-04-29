const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { jwtSecret } = require('../../utils/api');
const User = require('../../models/user/index');

async function registration(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Неккоректные данные при регистрации' })
        }

        const { email, password } = req.body;

        const candidate = await User.findOne({ email });

        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({ email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'Пользователь создан!' });

    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова!' });
    }
}

async function login (req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Некорректные данные при входе в систему"
            })
        }
        const { email, password } = req.body;
  
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден' });
        };

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль попробуйте снова' });
        };
        const token = jwt.sign(
            { userId: user.id },
            jwtSecret,
            { expiresIn: '1h' }
        );
        res.json({ token, userId: user.id });

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, порбуйте снова!' })
    }
}

module.exports = { registration, login };