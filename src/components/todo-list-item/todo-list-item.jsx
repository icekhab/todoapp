import React, { Component } from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {
  render() {
    const {
      onDeleted,
      onToggleDone,
      onToggleImportant,
      item: {
        name,
        done,
        important,
      },
    } = this.props;
    const textClassNames = `todo-list-item__text ${done ? 'todo-list-item__text_done' : ''} ${important ? 'todo-list-item__text_important' : ''}`;

    return (
      <div className="todo-list-item">
        <span
          className={textClassNames}
          onClick={onToggleDone}
        >
          { name }
        </span>
        <button
          type="button"
          className="todo-list-item__delete-btn btn btn-outline-danger"
          onClick={onDeleted}
        >
          <i className="fas fa-trash-alt" />
        </button>
        <button
          type="button"
          className="todo-list-item__important-btn btn btn-outline-success"
          onClick={onToggleImportant}
        >
          <i className="fas fa-exclamation" />
        </button>
      </div>
    );
  }
}

export default TodoListItem;
