import { combineReducers } from 'redux'

function userReducer(state = 'Jamal', action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  user: userReducer
})
