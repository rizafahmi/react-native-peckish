import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native'
import { connect } from 'react-redux'

const styles = {
  image: {
    height: 64,
    width: 120
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center'
  }
}

class Home extends React.Component {
  render () {
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => this.props.fetchRecipes('cheese, beef, cucumber')}>
            <Text>Fetch Recipe</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {this.props.searchedRecipes.map((recipe, index) => {
            return (
              <View style={styles.rows} key={index}>
                <Image source={{uri: recipe.thumbnail}} style={styles.image} />
                <Text>{recipe.title}</Text>
              </View>
            )
          })}
        </ScrollView>
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
