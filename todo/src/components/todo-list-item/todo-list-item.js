import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  render() {

    // эта переменная нужна для деструктуризации
    // чтоб дальше в коде не писать нигде пропсы
    const { label, onDeleted, 
            onToggleImportant, onToggleDone,
            done, important } = this.props;
    
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }
  
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ onToggleDone }
        >
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation"
          onClick={ onToggleImportant }
          />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}
