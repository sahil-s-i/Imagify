import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [user, Setuser] = useState(null);

    return (
        <div>
            <Link to='/'>
                <img src={assets.logo} alt="logo image" className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {
                    user ?
                        <div></div>
                        :
                        <div>
                            <p>Pricing</p>
                            <button>Login</button>
                        </div>
                }

                <div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
