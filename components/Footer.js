import React from 'react'
import FilterLink from '../containers/FilterLink'
import UndoTodo from '../containers/UndoTodo'
import RedoTodo from '../containers/RedoTodo'

const Footer = () => (
  <div className='col-md-12'>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    {" | "}
    <UndoTodo>
      Undo
    </UndoTodo>
    {", "}
    <RedoTodo>
      Redo
    </RedoTodo>
  </div>
)

export default Footer
