import React from 'react';

function Journal(props) {
  return (
    <div className="Journal">
      <h1>
        {props.year}年{props.month}月{props.day}日
      </h1>
      <p>
        {props.content}
      </p>

      <span className="Journal-edit-link" >
        edit
      </span>
    </div>
  );
}

export default Journal;
