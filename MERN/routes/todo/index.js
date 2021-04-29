const { Router } = require('express');
const { check } = require('express-validator');
const auth = require('../../middlewares/auth/index');

const { createTodo, getTodo, removeTodo, updateTodoCompleted, updateTodoImportant } = require('../../controllers/todo');

const router = Router();

router.post(
    '/generate',
    [
        check('title', 'Минимальное название todo, не должно превышать 30 символов').isLength({ min: 30 }),
        check('description', 'Поле обезательное для заполнение').isEmpty()
    ],
    auth,
    (req, res) => createTodo(req, res));

router.get(
    '/',
    auth,
    (req, res) => getTodo(req, res));

router.delete(
    '/',
    auth,
    (req, res) => removeTodo(req, res));

router.put('/completed', auth, (req, res) => updateTodoCompleted(req, res));
router.put ('/importanted', auth, (req, res) => updateTodoImportant(req, res));

module.exports = router;
