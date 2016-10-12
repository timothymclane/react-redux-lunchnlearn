import React, { PropTypes } from 'react'

const Todo = ({ onClick, onRemove, completed, text }) => (
  <div className="list-group-item clearfix"
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    <button type='button' className={"btn todo-check " + (completed ? "btn-warning" : "btn-success")} onClick={onClick}>
      <span className={"glyphicon " + (completed ? "glyphicon-remove" : "glyphicon-ok")}>
      </span>
    </button>
    {text}
    <span className="pull-right button-group">
      <button type='button' className="pull-right btn btn-danger" onClick={onRemove}>x</button>
    </span>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
