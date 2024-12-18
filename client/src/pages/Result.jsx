import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <form>
      <div>
        <div className='relative'>
          <img src={assets.sample_img_1} alt="" className='max-w-sm rounded' />
          <span className='absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]' />
        </div>
        <p>Loading.....</p>
      </div>

      <div>

      </div>
    </form>
  )
}

export default Result
