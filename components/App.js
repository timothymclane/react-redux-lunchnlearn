import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { connect } from 'react-redux'
import DevTools from '../containers/DevTools'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <AddTodo />
        </div>
        <div className='row'>
          <Footer />
        </div>
        <div className='row'>
          <VisibleTodoList />
        </div>
      </div>
    )
  }
}