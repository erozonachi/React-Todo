import React from 'react';

export const Todo = (props) => {
  const handleDoneClick = (event) => {
    event.stopPropagation();

    props.doneClickHandler(props.todo.id);
  };

  return (
  <li>
    { props.todo.completed? 
    <span style={{textDecoration: 'line-through red', color: '#aaa'}}>{props.todo.task}</span> :
      <span>{props.todo.task}</span>
    }
    <button
      onClick={(handleDoneClick)}
    >
      {props.todo.completed? 'Undo' : 'Done'}
    </button>
    </li>
  );
}
