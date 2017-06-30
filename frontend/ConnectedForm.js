import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Form from './components/Form'
import * as actionCreators from './actions/Actions'
import { graphql, compose } from 'react-apollo'
import mutation from './graphql/mutation'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}

export default compose(
  graphql(mutation),
  connect(mapStateToProps, mapDispatchToProps)
)(Form)
