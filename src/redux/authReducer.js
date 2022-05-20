import {authAPI} from "../api/api";

const USER_AUTHORIZATION = 'USER_AUTHORIZATION';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case USER_AUTHORIZATION:
            return {
                ...state,
                userId: action.userData.id,
                login: action.userData.login,
                email: action.userData.email,
                isAuth: true,
            }
        default: return state;
    }
}

export const userAuth = (userData) => ({type: USER_AUTHORIZATION, userData})

export const isAuthResult = () => (dispatch) => {
    authAPI.isAuth()
        .then(data => {
            if (!data.resultCode) {
                let {email, id, login} = data.data;
                dispatch(userAuth({email, id, login}))
            }
        })
}

export default authReducer;