import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
      <div>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="star icon" />
      </div>
    </div>
  )
}

export default Header
