
import initialState from '../initialState/initialState'
import { ADD_RECIPE, CHANGE_ACTIVE_RECIPE, SET_MODE, UPDATE_RECIPE, DELETE_RECIPE } from '../actions/actionTypes'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      let savedData = action.payload
      if (!savedData.hasOwnProperty('recipes')) { savedData = initialState }
      return {...state, ...savedData}

    case ADD_RECIPE:
      return Object.assign({}, state, {
        recipes: state.recipes.concat({
          id: action.id,
          title: 'New Recipe',
          ingredients: 'add ingredients',
          directions: 'provide directions',
          notes: 'optional notes'
        }),
        mode: action.mode,
        active: action.active
      })

    case CHANGE_ACTIVE_RECIPE:
      return Object.assign({}, state, {
        active: action.id,
        mode: 'display'
      })

    case SET_MODE:
      return Object.assign({}, state, {
        mode: action.mode
      })

    case UPDATE_RECIPE:
      let newObj = state.recipes.map(function (rec) {
        if (rec.id === action.recipe.id) {
          rec.title = action.recipe.title
          rec.ingredients = action.recipe.ingredients
          rec.directions = action.recipe.directions
          rec.notes = action.recipe.notes
        }
        return rec
      })
      return Object.assign({}, state, {
        recipes: newObj,
        mode: action.mode,
        active: action.active
      })

    case DELETE_RECIPE:
      let fewerRecipes = state.recipes.filter(rec => rec.id !== action.id)
      let newActive = fewerRecipes[0].id
      return Object.assign({}, state, {
        recipes: fewerRecipes,
        active: newActive,
        mode: 'display'
      })

    default:
      return state
  }
}

export default reducer
