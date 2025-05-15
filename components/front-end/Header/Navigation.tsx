import {  Headset} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import NavigationMobile from '../mobile/Navigation'

const Navigation = () => {
  return (
    <div className='inline-flex gap-8 px-4 py-8 border-2 mx-auto border-none sm:border-white/20 
    lg:justify-between sm:justify-center justify-between rounded-2xl min-w-full'>
      <div className='lg:flex items-center hidden'>
        <p className='lg:text-2xl '>Bouaoune Djamel AbdelRaouf</p>
        </div>
      <div className='hidden sm:flex gap-8  items-center  uppercase font-light'>
          <Link href={'#service'} className=' hover-blue '>Services</Link>
          <Link href={"#skills"}className=' hover-blue '>Technologies</Link>
          <Link href={"#portfolio"}className=' hover-blue '>Portfolio</Link>
          <Link href={"#contact"}className=' hover-blue '>Contact</Link>
        </div>
        <button className="cursor-pointer px-6 py-2 relative rounded-full xl:flex items-center text-white font-semibold 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                        transition-all duration-300 hidden 
                       ">
                <div
    className="absolute -inset-1 z-[-1]  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
     opacity-75 blur rounded-full"
  ></div>
      Contact me! <Headset className='inline-block ml-2' size={20} color='white'/>
    </button>
        
        {/* mobile menu */}
        <div className="sm:hidden w-full flex justify-between items-center gap-4 ">
           <div>
            <p className='text-2xl '>Bouaoune Djamel AbdelRaouf</p>
           </div>
            <div className='flex items-center gap-4 cursor-pointer border-2 border-white/40 rounded-lg '>
              <NavigationMobile />
            </div>
          </div>  
    </div>
  )
}

export default Navigation