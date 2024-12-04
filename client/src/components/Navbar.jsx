import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [user, Setuser] = useState(null);

    return (
        <div className='flex justify-between items-center py-4'>
            <Link to='/'>
                <img src={assets.logo} alt="logo image" className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {
                    user ?
                        <div></div>
                        :
                        <div className='flex gap-2 items-center sm:gap-5'>
                            <p className='cursor-pointer'>Pricing</p>
                            <button className='bg-zinc-800 text-white py-2 px-7 text-sm rounded-full sm:px-10'>Login</button>
                        </div>
                }

                <div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
