
import { AuthLayout } from "../../templates/AuthLayout"
import { LoginElement } from "../../elements/LoginElement"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { AuthLogin } from "../../api/Auth"
import { Navigate, useNavigate } from "react-router-dom"

const Login = props => {    
    let navigate = useNavigate()

    const { isLoggedIn } = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch()
    const handleCallback = (childeData) => {
        if(childeData.submit === true) {
            dispatch(AuthLogin(childeData.email, childeData.password)).then(_ => {
                navigate('/dashboard')
                window.location.reload()
            })
        }
    }

    if(isLoggedIn) {
        return <Navigate to='/dashboard' />
    }

    return (
        <AuthLayout>
            <LoginElement handleCallback={handleCallback}/>
        </AuthLayout>
    )
}

export default Login
