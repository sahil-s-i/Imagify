import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div>
      <h1>See the magic. Try now</h1>
      <button>Generate Images 
        <img src={assets.star_group} alt="star image" />
      </button>
    </div>
  )
}

export default GenerateBtn
