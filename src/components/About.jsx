import React from 'react'
import boss from '../assets/boss.jpg'
import Button from './Button'
function About() {
  return (
    <div className='bg-orange-50 p-10  '>
<div className='md:w-4/5 md:mx-auto md:flex md:items-center md:justify-center gap-10'> 
 <div className='flex items-start flex-col gap-5 md:w-1/2'>
  <p className='text-amber-500'>About us</p>
  <h1 className='text-wrap flex-wrap font-serif text-6xl '>A few words about our law firm <span className='text-amber-500'>success!</span></h1>
  <span className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam facere autem consectetur, dolor voluptates sit vitae distinctio quisquam velit molestias</span>
  <button className="inline-flex items-center mt-4 hover:bg-orange-100 border-2 border-green-900 py-2 px-4 ">
     More information about the law firm 
   </button>
 </div>
 <div className="hidden md:block md:w-1/2 items-center md:shadow-[15px_-15px_0_rgba(249,115,22,1)]">
  <img src={boss} alt=""/>
</div>


 </div>
</div>
  )
}

export default About
