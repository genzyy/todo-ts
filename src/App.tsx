import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';

// The variable initialized of type Todo and made an array.
const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false
  },
  {
    text: 'Write app',
    complete: true
  }
];

function App() {
  // The state of todos is an array initialized as initialTodos.
  const [todos, setTodos] = useState(initialTodos);

  // We first check which element of the array needs to be modified.
  // Then we get that element and change its complete entity.
  //And then we return all the elements of the array with concatenating
  // the object of which the value is changed.
  //And then we change the state of todos.
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoItem addTodo={addTodo} />
    </>
  );
}

export default App;
