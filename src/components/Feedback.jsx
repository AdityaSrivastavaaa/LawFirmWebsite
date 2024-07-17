import React from 'react'
import feedback from "../assets/tweet.webp"
function Feedback() {
  return (
    <div className='bg-orange-100 pt-10 pb-10  '>
      <div className='flex flex-col items-center justify-center w-4/5 mx-auto' >

      
      <p className='text-orange-500 text-lg'>Opinions about us</p>
      <h1 className='text-green-900 text-4xl pb-6 text-center'>What our customers say about us.</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto'>
      <div>
        <img src={feedback} width={350} alt="customer tweet" />
      </div>
      <div>
        <img src={feedback} width={350} alt="customer tweet" />
      </div>
      <div>
        <img src={feedback} width={350} alt="customer tweet" />
      </div>
      <div>
        <img src={feedback} width={350} alt="customer tweet" />
      </div>
      <div>
        <img src={feedback} width={350} alt="customer tweet" />
      </div>
      <div>
        <img src={feedback} width={350} alt="customer tweet" />
      </div>
      </div>
      <button className="text-green-900 inline-flex items-center mt-6 hover:bg-orange-400 bg-orange-300 border-0 py-2 px-4  ">
           Read more about the opinions
         </button>
      </div>
     
    </div>
  )
}

export default Feedback
