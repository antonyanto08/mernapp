import {AUTH, LOGOUT} from '../constants/actionTypes'

const authReducer = (state = {authData:null},action) =>{
    switch (action.type) {
        case AUTH:
            // When AUTH action is dispatched, save the authentication data to localStorage and update the state with the new data.
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state,authData:action?.data} ;
        case LOGOUT:
            // When LOGOUT action is dispatched, clear the authentication data from localStorage and update the state with null authData.
            localStorage.clear();
            return {...state,authData:null};
            default:
                // For any other action type, return the current state without making any changes
            return state;
    }
}

export default authReducer