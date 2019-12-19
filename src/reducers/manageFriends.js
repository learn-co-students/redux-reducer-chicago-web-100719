export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: state.friends.concat(action.friend)}
        case 'REMOVE_FRIEND':
            const friendArray = state.friends.slice()
            const index = friendArray.findIndex(friend => friend.id === action.id)
            friendArray.splice(index, 1)
            return {friends: friendArray}
        default:
            return state
    }
}
