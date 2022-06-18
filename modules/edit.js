import { getToDos, storeTodo } from './store.js';

export const updateToDoCompleted = (completedToDo) => {
  const todoList = completedToDo.nextElementSibling;
  const todos = getToDos();
  todos.forEach((todo) => {
    if (todo.description === todoList.textContent) {
      const todoCompleted = todo.completed;
      todo.completed = !todoCompleted;
    }
  });
  storeTodo(todos);
};

export const updateToDoListDescription = (newInput, initialValue) => {
  const todos = getToDos();
  todos.forEach((todo) => {
    if (todo.description === initialValue) {
      todo.description = newInput;
    }
  });
  storeTodo(todos);
};