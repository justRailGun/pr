/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'
const WebsiteCards = ({ title} : {src : string , title : string}) => {
  return (
    <div
    className='flex relative flex-col w-[450px] group-hover:scale-95 h-96 border-2 border-white/20 rounded-lg bg-[#111723] hover:scale-105 transition-all duration-300 ease-in-out'
    >
        <div className='w-full h-full '>
            <img src={"/placeholder.jpg"} alt={title} 

            className=' w-full h-full object-cover rounded-t-lg'
            />
        </div>
        <div className='h-2 mt-4 w-10 mx-auto rounded-full bg-gray-500' />
        <SquareArrowOutUpRight size={24} className='cursor-pointer hover:text-blue-500/80 transition-all duration-300 ease-in-out absolute top-[70%] right-4 text-white/80' />
        <div className='flex flex-col items-center justify-center w-full h-full gap-4 '>
            <h2 className='text-lg text-center font-medium font-poppins text-white/90'>{title.split('\n').map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}</h2>
            
        </div>
    </div>
  )
}

export default WebsiteCards