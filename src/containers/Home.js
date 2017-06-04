import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'

class Home extends React.Component {
  render () {
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => this.props.fetchRecipes('cheese, beef, cucumber')}>
            <Text>Fetch Recipe</Text>
          </TouchableOpacity>
        </View>
        <ScrollView />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home)
