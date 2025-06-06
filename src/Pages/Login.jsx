import React, { useState } from 'react'
import { login as authLogin, adminLogin } from '../store/authSlice'
import { useNavigate, Link } from 'react-router-dom'
import authService from '../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, Input, Logo } from '../Components/index'

function Login() {
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const login = async (data) => {
        setError("")

        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData.$id === '68046d7600170c4dd1be') {
                    dispatch(adminLogin(userData))
                    console.log(userData);
                    console.log("Login Success as Admin");
                    navigate("/admin")
                }

                else if (userData) {
                    dispatch(authLogin(userData))
                    console.log(userData);
                    console.log("Login Success as User");
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(login)}
                    className='mt-8'
                >
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            type="email"
                            placeholder="Enter Your Email"

                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email Address must be valid address"
                                }
                            })}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your Password"
                            {...register("password", {
                                required: true
                            })}
                        />

                        <Button
                            type='submit'
                            className='w-full'
                        >Sign In</Button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
