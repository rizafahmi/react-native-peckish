/* global fetch */
export const fetchRecipes = (ingredients) => {
  return (dispatch, getState) => {
    const url = 'http://www.recipepuppy.com/api/'
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    return fetch(`${url}?${params}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setSearchedRecipes({ recipes: data.results }))
      })
      .catch(err => console.error(err))
  }
}
export const setSearchedRecipes = ({ recipes }) => {
  return {
    type: 'SET_SEARCHED_RECIPES',
    recipes
  }
}
export const addRecipe = () => {
  return {
    type: 'ADD_RECIPE'
  }
}
