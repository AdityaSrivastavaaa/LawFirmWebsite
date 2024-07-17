import React from 'react'
import logo from "../assets/lawfirm.webp"
function Services() {
  return (
    <div className='bg-orange-50 p-6 flex flex-col text-center items-center gap-5 pb-10'>
      <p className='text-orange-400'>Specialisation</p>
      <h1 className='text-green-900 text-5xl font-serif '>What we do</h1>
      <p className='text-justify text-gray-500 '>Our lawyers are specialists in criminal law,civil law,commercial law,administrative law and new technologies. We are not afraid of challenges, including consumer bankruptcy.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2  border w-5/6 mx-auto h-auto items-center">
      <div className="border  p-4 w-full aspect-square flex flex-col items-center justify-around transform transition-transform duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-lg hover:bg-orange-50">
          <img src={logo} alt="logo" width={200} />
          <h2 className='text-3xl font-serif text-green-900'>Law Family</h2>
          <p>Icon</p>
        </div>
        <div className="border  p-4 w-full aspect-square flex flex-col items-center justify-around transform transition-transform duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-lg hover:bg-orange-50">
          <img src={logo} alt="logo" width={200} />
          <h2 className='text-3xl font-serif text-green-900'>Law Family</h2>
          <p>Icon</p>
        </div>
        <div className="border  p-4 w-full aspect-square flex flex-col items-center justify-around transform transition-transform duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-lg hover:bg-orange-50">
          <img src={logo} alt="logo" width={200} />
          <h2 className='text-3xl font-serif text-green-900'>Law Family</h2>
          <p>Icon</p>
        </div>
        <div className="border  p-4 w-full aspect-square flex flex-col items-center justify-around transform transition-transform duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-lg hover:bg-orange-50">
          <img src={logo} alt="logo" width={200} />
          <h2 className='text-3xl font-serif text-green-900'>Law Family</h2>
          <p>Icon</p>
        </div>
        <div className="border  p-4 w-full aspect-square flex flex-col items-center justify-around transform transition-transform duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-lg hover:bg-orange-50">
          <img src={logo} alt="logo" width={200} />
          <h2 className='text-3xl font-serif text-green-900'>Law Family</h2>
          <p>Icon</p>
        </div>
        <div className="border  p-4 w-full aspect-square flex flex-col items-center justify-around transform transition-transform duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-lg hover:bg-orange-50">
          <img src={logo} alt="logo" width={200} />
          <h2 className='text-3xl font-serif text-green-900'>Law Family</h2>
          <p>Icon</p>
        </div>
        <div className="border  p-4 w-full aspect-square flex flex-col items-center justify-around transform transition-transform duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-lg hover:bg-orange-50">
          <img src={logo} alt="logo" width={200} />
          <h2 className='text-3xl font-serif text-green-900'>Law Family</h2>
          <p>Icon</p>
        </div>
        <div className="border  p-4 w-full aspect-square flex flex-col items-center justify-around transform transition-transform duration-300 hover:scale-105 hover:translate-y-2 hover:shadow-lg hover:bg-orange-50">
          <img src={logo} alt="logo" width={200} />
          <h2 className='text-3xl font-serif text-green-900'>Law Family</h2>
          <p>Icon</p>
        </div>
    </div>
    </div>
  )
}

export default Services
