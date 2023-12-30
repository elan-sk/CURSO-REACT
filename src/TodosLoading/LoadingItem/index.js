import React from 'react';
import '../TodoLoading.css';
import './LoadingItem.css';

function LoadingItem() {
  return (
    <div className= "Item loading">
      <span className="Icon-svg LoadingTodo-completeIcon loading"></span>
      <span className="Icon-svg Icon-svg--delete LoadingTodo-deleteIcon loading"></span>
    </div>
  );
}

export { LoadingItem };
