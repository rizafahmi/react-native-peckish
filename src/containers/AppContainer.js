import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../actions'
import Home from './Home'

class AppContainer extends React.Component {
  render () {
    return (
      <Home {...this.props} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(null, mapDispatchToProps)(AppContainer)
