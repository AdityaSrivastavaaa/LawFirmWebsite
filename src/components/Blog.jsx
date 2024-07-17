import React from 'react'
import blog1 from '../assets/blog1.webp'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.webp'

function Blog() {
  return (
    <div className='bg-orange-50 p-10'>
      <div className='w-4/5 mx-auto flex flex-col items-center '>

      
      <span className='text-orange-500 text-lg '>Blog</span>
      <h1 className='text-green-900 text-4xl pb-6 text-center' >Newsroom</h1>
      <div className='flex flex-col gap-7 md:flex-row'>
        <div>
            <img src={blog1} alt="" />
            <p className='text-green-950 text-sm pt-4 font-sans pb-3'>Criminal Law</p>
            <h1 className='text-green-950 text-3xl text-justify pb-4'>How do you prepare for a Company's RODO audit and implementation?</h1>
            <p className='text-gray-500 text-justify font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maiores!</p>
        </div>
        <div>
            <img src={blog2} alt="" />
            <p className='text-green-950 text-sm pt-4 font-sans pb-3'>Criminal Law</p>
            <h1 className='text-green-950 text-3xl text-justify pb-4'>How do you prepare for a Company's RODO audit and implementation?</h1>
            <p className='text-gray-500 text-justify font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maiores!</p>
        </div>
        <div>
            <img src={blog3} alt="" />
            <p className='text-green-950 text-sm pt-4 font-sans pb-3'>Criminal Law</p>
            <h1 className='text-green-950 text-3xl text-justify pb-4'>How do you prepare for a Company's RODO audit and implementation?</h1>
            <p className='text-gray-500 text-justify font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maiores!</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Blog
