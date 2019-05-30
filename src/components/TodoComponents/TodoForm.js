import React from 'react';

const TodoForm = (props) => (
  <div>
    <form
      onSubmit={props.submitHandler}
    >
      <input value={props.initialVal} onChange={props.changeHandler} />
      <button type='submit'>Add Todo</button>
      <button type='button' onClick={props.clearHandler}>Clear Completed</button>
    </form>
  </div>
);

export default TodoForm;
