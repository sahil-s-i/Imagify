import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo} alt="Logo image" width={150}/>
        <p>Copyright @ 2023 | All right reserved.</p>

        <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="facebook icon" width={35}/>
            <img src={assets.instagram_icon} alt="instagram icon" width={35}/>
            <img src={assets.twitter_icon} alt="twitter icon" width={35}/>
        </div>
    </div>
  )
}

export default Footer
