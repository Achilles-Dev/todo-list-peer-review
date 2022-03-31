import { getToDos, storeTodo } from './store.js';

const removeToDo = () => {
  const todos = getToDos();
  const newTodo = todos.filter((todo) => todo.completed !== true);
  newTodo.forEach((todo, index) => {
    todo.index = index + 1;
  });

 storeTodo(newTodo);
};

export default removeToDo;