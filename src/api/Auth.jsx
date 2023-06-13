import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS, SET_MESSAGE } from "../actions/Actions"
import { AuthServiceLogin, AuthServiceLogout, AuthServiceRegister } from "../services/AuthService"

export const AuthRegister = parameters => dispath => {
    return AuthServiceRegister(parameters).then(
        response => {
            dispath({
                type: REGISTER_SUCCESS,
                payload: response
            })
        },

        error => {
            dispath({
                type: REGISTER_FAIL
            })

            dispath({
                type: SET_MESSAGE,
                payload: error.toString()
            })

            return Promise.reject()
        }   
    )
}

export const AuthLogin = (email, password) => dispatch => {
    return AuthServiceLogin(email, password).then(
        response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: response },
            })

            return Promise.resolve()
        },

        error => {
            dispatch({
                type: LOGIN_FAIL,
            })

            dispatch({
                type: SET_MESSAGE,
                payload: error.toString(),
            });

            return Promise.reject()
        }
    )
}

export const AuthLogout = _ => dispatch => {
    AuthServiceLogout()

    dispatch({
        type: LOGOUT,
    })
}