import React, { useState } from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const exampleReq = `https://v2.jokeapi.dev/joke/Any`;

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  const [data, setData]: any = useState('');

  const getRecipe = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    //console.log(data);
    setData(data);
  };

  console.log(data.setup);

  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type='checkbox'
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
            getRecipe();
          }}
        />{' '}
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
