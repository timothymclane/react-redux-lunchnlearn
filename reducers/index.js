import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { routerReducer as routing } from 'react-router-redux'
import undoable from 'redux-undo';
import ActionTypes from '../actions';

const todoApp = combineReducers({
  todos: undoable(todos, {
    limit: 10, // set a limit for the history
    undoType: 'UNDO_TODO',
    redoType: 'REDO_TODO'
  }),
  visibilityFilter,
  routing
})

export default todoApp
