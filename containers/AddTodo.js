import React from 'react'
import { connect } from 'react-redux'
import { addTodo, changePage } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  dispatch(changePage('index'))
  return (
    <div className='col-md-12'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      } }>
        <div className="input-group">
          <input className='form-control' type='text' ref={node => {
            input = node
          } } />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Add ToDo</button>
          </span>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo