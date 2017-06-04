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
    alignItems: 'center',
    height: 80,
    borderBottomColor: '#D8DCDA',
    borderBottomWidth: 2,
    padding: 5
  },
  searchSection: {
    backgroundColor: '#FE4858',
    height: 60,
    justifyContent: 'center',
    paddingLeft: 22
  },
  searchText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  container: {
    flex: 1
  },
  recipeSection: {
    flex: 3
  },
  recipeTitle: {
    paddingLeft: 5
  }
}

class Home extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <TouchableOpacity onPress={() => this.props.fetchRecipes('cheese, beef, cucumber')}>
            <Text style={styles.searchText}>Fetch Recipe</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.recipeSection}>
          {this.props.searchedRecipes.map((recipe, index) => {
            return (
              <View style={styles.rows} key={index}>
                <Image source={{uri: recipe.thumbnail}} style={styles.image} />
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
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
