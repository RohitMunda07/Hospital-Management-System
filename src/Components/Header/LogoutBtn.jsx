import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandle = () => {
        authService.logout().then(() => {
            dispatch(logout())
            console.log("Logout Sucessfull");
            
            
        })
    }

    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandle}>
            Logout
        </button>
    )
}

export default LogoutBtn
