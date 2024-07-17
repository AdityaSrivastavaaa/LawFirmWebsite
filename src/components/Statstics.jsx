import React from 'react'
import Button from './Button'
function Statstics() {
  return (
    <div className='bg-green-900 text-center flex flex-col pt-6 pb-6'>
      <p className='text-orange-300'>what makes us different</p>
      <h1 className='text-5xl text-white font-serif mt-4'>Why choose our law firm?</h1>
      <div className='md:flex md:justify-evenly md:w-4/5 md:mx-auto md:mt-8 md:gap-11' >
        <div className='mt-6 p-7 mx-auto flex flex-col gap-5 md:w-2/4 md:gap-10'>
          <span className='text-orange-300 text-6xl'>95%</span>
          <p className='text-justify text-white font-serif text-3xl'>Thanks to our skills and commitment, our law firm achieves a high degree of efficiency in resolving cases.</p>
          <button className="inline-flex mt-4 hover:bg-orange-400 bg-orange-300 border-0 w-3/6 mx-auto justify-center py-2">
              Make a Appointment 
         </button>
        </div>
        <div className='w-4/5 border mx-auto border border-gray-500 md:h-[400px] md:w-[5px] bg-slate-400'></div>
        <div className='md:w-1/2'>
            <div className='mt-6 p-7 mx-auto flex flex-col gap-5'>
                <span className='text-orange-300 text-6xl'>10+</span>
                <p className='text-justify text-white font-serif text-3xl'>Years of experience is the solid foundation on which we base our law firm</p>
            </div>
            <div className='w-4/5 border mx-auto border border-gray-500'></div>
            <div  className='mt-6 p-7 mx-auto flex flex-col gap-5'>
                <span className='text-orange-300 text-6xl'>+500</span>
                <p className='text-justify text-white font-serif text-3xl'>More than 500 satisfied clients are the result of our excellent legal services</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Statstics
