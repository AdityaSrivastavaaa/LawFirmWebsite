import React from 'react'
import Button from './Button'
import model from '../assets/girlImage.png';
function Banner() {
  return (
    <div className='bg-orange-100 p-6  '>
      <div className='md:w-4/5 md:mx-auto md:flex md:items-center md:justify-center'> 
       <div className='flex items-start flex-col gap-5 md:w-1/2'>
        <p className='text-amber-500'>Law Firm</p>
        <h1 className='text-wrap flex-wrap font-serif text-6xl '>Overcome Legal Obstacles to your <span className='text-amber-500'>success!</span></h1>
        <span className='text-gray-400'>law without obstacles for your sucess. Professional support to help you overcome legal difficulties and achieve your goals.</span>
        <button className="inline-flex items-center mt-4 hover:bg-orange-400 bg-orange-300 border-0 py-2 px-4 ">
           Book a free consultation 
         </button>
       </div>
       <div className='hidden md:block md:w-1/2'>
       <img src={model}alt="" />
       </div>
       </div>
    </div>
  )
}

export default Banner
