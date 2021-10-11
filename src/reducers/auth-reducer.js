import { USER_LOGIN_BEGIN, USER_LOGIN_SUCCESS, USER_AUTH_ERROR, USER_LOGOUT } from '../actions';

const auth_reducer = (state, action) => {
    if (action.type === USER_LOGIN_BEGIN) {
        return { ...state, isLoading: true}
    }
    if (action.type === USER_LOGIN_SUCCESS) {
        return { 
            ...state, 
            isLoading: false,
            token: action.payload.idToken,
            isLoggedIn: !!action.payload.idToken
        }
    }
    if (action.type === USER_AUTH_ERROR) {
        return { ...state, isLoading: false}
    }
    if (action === USER_LOGOUT) {
        return { 
            ...state, 
            token: '', 
            isLoggedIn: false
        }
    }
};

export default auth_reducer;
