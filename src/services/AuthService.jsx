import {HttpRequestPost} from "./HttpRequest"

export const AuthServiceRegister = parameters => {
    return HttpRequestPost('register', parameters).then(response => {
        console(response)
    }).catch(error => console.error(error))
}

export const AuthServiceLogin = (email, password) => {

    return HttpRequestPost('login', {email, password}).then(response => {
        if (response.authorisation.token) {
            localStorage.setItem("user", JSON.stringify(response))
        }

        return response
    }).catch(error => console.error(error))
}

export const AuthServiceLogout = () => {
    return localStorage.removeItem("user")
}