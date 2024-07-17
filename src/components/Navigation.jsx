import React from 'react'
import Button from './Button'
import BrandLogo from '../assets/lawfirm.webp'
import {useState} from 'react'

function Navigation() {
  const [isOpen , setIsOpen] = useState(false);
  return (
    <>
    <nav className='sticky top-0 bg-amber-50 z-50'>
    <div className='flex items-center justify-between flex-wrap p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6 lg:mr-72'>
       <img src={BrandLogo} alt="brandlogo" className="w-20 mr-2"/>
      </div>
      <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
      <div className={`w-full block text-center  lg:flex  lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <ul className="text-xl w-full text-center items-center cursor-pointer">
  <li className="block mt-4 text-green-900 md:hover:text-green-900 hover:bg-amber-500 md:hover:bg-transparent lg:hover:bg-transparent hover:text-white md:hover:underline lg:hover:underline lg:inline-block lg:mt-0 text-white-200 mr-4">
    About Us
  </li>
  <li className="block mt-4 text-green-900 md:hover:text-green-900 hover:bg-amber-500 md:hover:bg-transparent lg:hover:bg-transparent hover:text-white md:hover:underline lg:hover:underline lg:inline-block lg:mt-0 text-white-200 mr-4">
    Offer
  </li>
  <li className="block mt-4 text-green-900 md:hover:text-green-900 hover:bg-amber-500 md:hover:bg-transparent lg:hover:bg-transparent hover:text-white md:hover:underline lg:hover:underline lg:inline-block lg:mt-0 text-white-200 mr-4">
    Our Team
  </li>
  <li className="block mt-4 text-green-900 md:hover:text-green-900 hover:bg-amber-500 md:hover:bg-transparent lg:hover:bg-transparent hover:text-white md:hover:underline lg:hover:underline lg:inline-block lg:mt-0 text-white-200 mr-4">
    Blog
  </li>
  <li className="block mt-4 text-green-900 md:hover:text-green-900 hover:bg-amber-500 md:hover:bg-transparent lg:hover:bg-transparent hover:text-white md:hover:underline lg:hover:underline lg:inline-block lg:mt-0 text-white-200 mr-4">
    Contact
  </li>
</ul>


        <button className="inline-flex items-center mt-4 hover:bg-amber-600 bg-amber-500 border-0 py-2 px-4 text-white">
           Make a Appointment
         </button>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navigation
