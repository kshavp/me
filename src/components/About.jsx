// import React from 'react'
import { ABOUT_DEV, ABOUT_SEC } from '../constants'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 md:pt-16 text-neutral-200">
        <h2 className='my-12 text-center text-4xl '>About Me</h2>
        <div className='md:flex justify-center md:gap-x-12 m-6'>
            <p className='md:w-1/3 mb-12 text-justify'>
                {ABOUT_DEV}
            </p>
            <p className='md:w-1/3 text-justify'>
                {ABOUT_SEC}
            </p>
        </div>
         
    </div>
  )
}

export default About