export const searchedRecipe = (state = null, action) => {
  return state
}

export const recipeCount = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return state + 1
    default:
      return state
  }
}
