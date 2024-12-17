import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo} alt="Logo image" width={150}/>
        <p>Copyright @ 2023 | All right reserved.</p>

        <div>
            <img src={assets.facebook_icon} alt="facebook icon" width={35}/>
        </div>
    </div>
  )
}

export default Footer
