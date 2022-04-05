import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

  state = {
    done: false,
    important: false
  }

  // обрабатываю клик по done из state
  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  }

  // обрабатываю клик по important из state
  onMarkImoprtant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    })
  }

  render() {

    // эта переменная нужна для деструктуризации
    // чтоб дальше в коде не писать нигде пропсы
    const { label, onDeleted } = this.props;
    // достаю done из state, который объявил выше
    const { done, important } = this.state;
    
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
          onClick={ this.onLabelClick }
        >
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation"
          onClick={this.onMarkImoprtant}
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
