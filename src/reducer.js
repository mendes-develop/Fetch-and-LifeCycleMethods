let defaultState = {
    users: []
}

// NOTES:
//  action is an object  { type: "FETCHING_USERS", payload: data }  )  data = [users] that we are going to set
//  action is an object  { type: "ADD_USER", payload: data }  )    data = {user}  that we are going to add
//  action is an object  { type: "DELETE_USER", payload: data }  ) data = {user} that we are going to subtract




export default function reducer(state = defaultState, action){
    console.log(action)
    switch(action.type){

        case "GET_USERS": 
            return {
                ...state, 
                users: action.payload
            }

        case "ADD_USER": 
            return {
                ...state, 
                users: state.users.concat(action.payload)
                
            }

        case "DELETE_USER": 
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
                
            }

        default: return state
        



    }















}