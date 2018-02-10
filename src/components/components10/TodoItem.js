import React from 'react';

function TodoItem(props) {
  const checkClassName = props.checked ? 'checked' : '';
  return (
    <div className={`item ${checkClassName}`}>
      <input type="checkbox" onClick={props.onCheck} />
      <p>{props.text}</p>
    </div>
  );
}

export default TodoItem;
