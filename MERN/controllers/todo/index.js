const Todo = require('../../models/todo/index');

async function createTodo (req, res) {
  try {
    const { title, description } = req.body;

    const todo = new Todo({ title, description, owner: req.user.userId, completed: false, importanted: false});
    await todo.save();

    res.status(201).json({ message: 'Todo успешно создан!' });
  
  } catch (error) {
    res.status(500).json({ message: `При создание todo, возникла ошибка ${error}` })
  }
}

async function getTodo (req, res) {
  try {
    const todo = await Todo.find({ owner: req.user.userId });
    res.json(todo);
    
  } catch (error) {
    res.status(500).json({ message: `при получение todo возникла ошибка ${error}`})
  }
}

async function removeTodo(req, res){
  try {
    const { todoId } = req.body;
    await Todo.findOneAndDelete({ _id: todoId, owner: req.user.userId });
    res.json({ message: 'Вы удалили успешно '});
  } catch (error) {
    res.status(500).json({ message: `при удаление позникла ошибка ${error}`})
  }
}

async function updateTodoCompleted(req, res){
  try {
    const { todoId } = req.body;
    const todo = await Todo.findOne({ _id: todoId, owner: req.user.userId });
    todo.completed = !todo.completed;
    await todo.save();
    res.json({ message: 'Вы изменили успешно '});
  } catch (error) {
    res.status(500).json({ message: `при изменение completed позникла ошибка ${error}`})
  }
};

async function updateTodoImportant(req, res){
  try {
    const { todoId } = req.body;
    const todo = await Todo.findOne({ _id: todoId, owner: req.user.userId });
    todo.importanted = !todo.importanted;
    await todo.save();

    res.json({ message: 'Вы изменили успешно'});

  } catch (error) {
    res.status(500).json({ message: `при измение important позникла ошибка ${error}`})
  }
}

module.exports = { createTodo, getTodo, removeTodo, updateTodoCompleted, updateTodoImportant }