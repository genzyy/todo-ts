import React, { useState } from 'react';

interface AddTodoItemProps {
  addTodo: AddTodo;
}

const AddTodoItem: React.FC<AddTodoItemProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input
        type='text'
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        type='submit'
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoItem;
