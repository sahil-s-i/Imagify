import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        <div className='flex flex-col items-center justify-center my-20 py-12 md:px-28'>

            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer testimonials</h1>
            <p className='text-gray-500 mb-12'>What Our Users Are Saying</p>

            <div className='flex flex-wrap gap-6'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index}>
                        <div>
                            <img src={testimonial.image} className='rounded-full w-14' alt="testimonials image" />
                            <h2>{testimonial.name}</h2>
                            <p>{testimonial.role}</p>
                            <div className='flex mb-4'>
                                {Array(testimonial.stars).fill().map((item, index) => (

                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
