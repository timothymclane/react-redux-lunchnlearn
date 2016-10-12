import { connect } from 'react-redux'
import { redoTodo } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(redoTodo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)
