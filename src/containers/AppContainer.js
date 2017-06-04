import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ActionCreators } from '../actions'

const styles = {
  container: {
    flex: 1
  }
}

class AppContainer extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          I am App Container!
          Recipe count: {this.props.recipeCount}
        </Text>
        <TouchableOpacity onPress={() => this.props.addRecipe()}>
          <Text>Add recipe</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipeCount: state.recipeCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
