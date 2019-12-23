const initailState = {
    numberOfPresents: 0
}

export function managePresents(state = initailState, action){

    switch(action.type){
        case "INCREASE": 
         return Object.assign({}, state, {
             numberOfPresents: state.numberOfPresents + 1
         })
         default:
         return state
    }
}
