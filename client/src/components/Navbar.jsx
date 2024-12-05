import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [user, Setuser] = useState(true);

    const navigate = useNavigate();

    return (
        <div className='flex justify-between items-center py-4'>
            <Link to='/'>
                <img src={assets.logo} alt="logo image" className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {
                    user ?
                        <div>
                            <button>
                                <img className='w-5' src={assets.credit_star} alt="Credit star image" />
                                <p>Credit left : 50</p>
                            </button>
                        </div>
                        :
                        <div className='flex gap-2 items-center sm:gap-5'>
                            <p onClick={() => navigate('/buy')} className='cursor-pointer'>Pricing</p>
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