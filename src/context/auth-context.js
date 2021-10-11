import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/auth-reducer';
import { USER_LOGIN_BEGIN, USER_LOGIN_SUCCESS, USER_AUTH_ERROR, USER_LOGOUT } from '../actions';
import { signup_url, login_url } from '../utils/constants';
import { useHistory  } from 'react-router';

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const history = useHistory();
    const initialState = {
        isLoading: false,
        token: '',
        isLoggedIn: false
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const loginUser = async ({login, email, password}) => {
        dispatch({ type: USER_LOGIN_BEGIN});
        try {
            const response = await fetch(login ? login_url : signup_url, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error.message)
            } else {
                dispatch({ type: USER_LOGIN_SUCCESS, payload: data});
                history.replace('/');
            }
        } catch (error) {
            alert(error.message);
            dispatch({ type: USER_AUTH_ERROR });
        }
    }

    const logoutUser = () => {
        dispatch({ type: USER_LOGOUT});
    }

    return (
        <AuthContext.Provider value={{...state, loginUser, logoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
};
