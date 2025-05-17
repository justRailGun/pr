import Image from 'next/image'
import React from 'react'

const ServicesCard = ({logo , title , description} : {logo : string , title : string , description : string}) => {
  return (
    <div className='flex flex-col gap-4 items-start'>
        {/* logo & title */}
        <div className='flex md:flex-row flex-col w-full md:justify-start justify-center md:items-start items-center gap-4'>
            <Image width={48} height={48} src={logo} alt={title} />
            <h2 className='text-xl sm:text-2xl lg:text-4xl  font-medium font-poppins text-white/90'>{title}</h2>
        </div>
        {/* description */}     
        <div>
            <p className='text-white/60 leading-relaxed  font-light text-sm md:text-base'>{description}</p>
        </div>
        
    </div>
  )
}

export default ServicesCard