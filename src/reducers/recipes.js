export const searchedRecipes = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCHED_RECIPES':
      return action.recipes
    default:
      return state
  }
}

export const recipeCount = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return state + 1
    case 'SET_SEARCHED_RECIPES':
      return action.recipes.length
    default:
      return state
  }
}
