import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = () => {

    const [state, setState] = useState('Login');

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form className='relative bg-white p-10 rounded-xl text-slate-500'>
                <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
                <p className='text-sm'>Welcome back! Please sign in to continue</p>

                {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img width={30} src={assets.profile_icon} alt="User icon" />
                    <input className='outline-none text-sm' type="text" placeholder='Full Name' required />
                </div>}

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img width={20} src={assets.email_icon} alt="Email icon" />
                    <input className='outline-none text-sm' type="email" placeholder='Email Id' required />
                </div>

                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img width={15} src={assets.lock_icon} alt="Lock icon" />
                    <input className='outline-none text-sm' type="password" placeholder='Password' required />
                </div>

                <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>

                <button className='bg-blue-600 w-full text-white py-2 rounded-full'>Create an account</button>

                <p className='mt-5 text-center'>Don't have an account?<span className='text-blue-600 cursor-pointer'> Sign Up</span></p>
                <p className='mt-5 text-center'>Already have an account?<span className='text-blue-600 cursor-pointer'> Login</span></p>

                <img src={assets.cross_icon} alt="Close icon" className='absolute top-5 right-5 cursor-pointer' />
            </form>
        </div>
    )
}

export default Login
