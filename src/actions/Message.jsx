import { SET_MESSAGE, CLEAR_MESSAGE } from "./Actions"

export const setMessage = message => ({
    type: SET_MESSAGE,
    payload: message
})

export const clearMessage = _ => ({
    type: CLEAR_MESSAGE
})