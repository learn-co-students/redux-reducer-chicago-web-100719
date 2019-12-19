export function manageFriends(state = {friends: [] }, action) {
  const removalIndex = state.friends.findIndex(friend => friend.id === action.id)
  switch(action.type) {
    case 'ADD_FRIEND':
      return ({...state, friends: [...state.friends, action.friend]})
    case 'REMOVE_FRIEND':
      return ({...state, friends: 
        [...state.friends.slice(0, removalIndex),
        ...state.friends.slice(removalIndex + 1)]
      })
    default:
      return state
  }
}
