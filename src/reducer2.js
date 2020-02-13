let initialState = {
    users: []
}



//dispatch( action => { type: "GET_USERS", payload: data }  )  data = [users]
//dispatch( action => { type: "ADD_USER", payload: data }  )    data = {user} +
//dispatch( action => { type: "DELETE_USER", payload: data }  ) data = {user} -



export default function reducer(state = initialState, action){
    switch(action.type){

        case "GET_USER":
            return { 
                ...state,
                users: action.data
            }
        case "ADD_USER":
            return {
                ...state,
                users: state.users.concat(action.data)
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(users => users.id !== action.data.id)
            }
    
        default :return state
    }
}


// export default function reducer( state = initialState, action){
//     switch (action.type) {
//         case "SET_USERS" : 
//             return {
//                 ...state,
//                 currentUser: action.payload
//             }
//         default :return state
//     }
    
// }
