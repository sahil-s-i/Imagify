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
      <div className='flex w-full max-w-xl bg-neutral-500 text-white'>
        <input type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'/>
        <button className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full' type='submit'>Generate</button>
      </div>
    </form>
  )
}

export default Result
