type Todo = {
  id: string;
  text: string;
};

let TODOS: Todo[] = [];

export function addTodo(text: string) {
  const newTodo = { id: Math.random().toString(), text };
  TODOS.push(newTodo);
  return newTodo;
}

export function getTodo(id: string) {
  const todo = TODOS.find(todo => todo.id === id);
  if (!todo) {
    throw new Error("Todo not found");
  }
  return todo;
}

export function getAllTodos() {
  return TODOS;
}

export function updateTodo(id: string, text: string) {
  const todo = getTodo(id);
  todo.text = text;
  return todo;
}

export function deleteTodo(id: string) {
  TODOS = TODOS.filter(todo => todo.id !== id);
}
