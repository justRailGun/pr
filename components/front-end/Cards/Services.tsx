import Image from 'next/image'
import React from 'react'

const ServicesCard = ({logo , title , description} : {logo : string , title : string , description : string}) => {
  return (
    <div className='flex flex-col gap-4 items-start'>
        {/* logo & title */}
        <div className='flex items-center gap-4'>
            <Image width={48} height={48} src={logo} alt={title} />
            <h2 className='text-4xl font-medium font-poppins text-white/90'>{title}</h2>
        </div>
        {/* description */}     
        <div>
            <p className='text-white/60 leading-relaxed  font-light'>{description}</p>
        </div>
        
    </div>
  )
}

export default ServicesCard