import { Headset} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='inline-flex gap-8 px-4 py-8 border-2 mx-auto border-white/20 
    justify-between rounded-2xl min-w-full'>
      <div className='flex items-center'><p className='text-2xl'>Bouaoune Djamel AbdelRaouf</p></div>
      <div className='flex gap-8 items-center uppercase font-light'>
        <Link href='#' className=' hover-blue '>Services</Link>
        <Link href={"#"}className=' hover-blue '>Technologies</Link>
        <Link href={"#"}className=' hover-blue '>Portfolio</Link>
        <Link href={"#"}className=' hover-blue '>Contact</Link>
        </div>
        <button className="cursor-pointer px-6 py-2 relative rounded-full flex items-center text-white font-semibold 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                        transition-all duration-300 
                       ">
                <div
    className="absolute -inset-1 z-[-1]  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  opacity-75 blur rounded-full"
  ></div>
      Contact me! <Headset className='inline-block ml-2' size={20} color='white'/>
    </button>
        
    </div>
  )
}

export default Navigation