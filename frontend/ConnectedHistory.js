import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/Actions'
import History from './components/History'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import query from './graphql/query'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}

export default compose(
  graphql(query),
  connect(mapStateToProps, mapDispatchToProps)
)(History)
