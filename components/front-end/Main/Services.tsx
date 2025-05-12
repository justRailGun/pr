import React from 'react'
import ServicesCard from '../Cards/Services'
const Services = () => {
    const services = [
    {
        logo: '/webdev.svg',
        title: 'Web Development',   
        side : "left",
        description: 'I specialize in building scalable, high-performance web applications using modern frameworks and technologies. I have experience with React, Next.js, TypeScript, MongoDB, and Tailwind CSS.'
    },
    {
        logo: '/webdesign.svg',
        title: 'Web Design',  
        side : "right", 
        description: 'I specialize in building scalable, high-performance web applications using modern frameworks and technologies. I have experience with React, Next.js, TypeScript, MongoDB, and Tailwind CSS.'
    },
    {
        logo: '/wordpress.svg',
        title: 'WordPress Development',  
        side : "left", 
        description: 'I specialize in building scalable, high-performance web applications using modern frameworks and technologies. I have experience with React, Next.js, TypeScript, MongoDB, and Tailwind CSS.'
    }
    ]
  return (
    <main className='flex flex-col'>
        {/* title */}
        <div 
        className='  
         text-transparent bg-clip-text 
        bg-gradient-to-r from-pink-500 via-purple-500 
        to-indigo-500 w-72'>
            
        <h1 className='text-left font-medium uppercase text-4xl 
        tracking-wider leading-26'>My Services
        </h1>
        </div>
        {/* services */}
        <section className=" py-16 text-white flex items-center flex-col w-full relative">
      

      {/* Vertical Line */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-[calc(100%-10rem)] bg-white/20 z-0" />
      <div className="absolute w-52 h-52 bg-pink-500/20 blur-3xl rounded-full top-[250px] left-[550px] z-0" />

      <div className="flex flex-col items-center gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative bg-[#141827] border border-white/10 rounded-xl p-8 w-[70%] z-10
              ${service.side === 'left' ? '-translate-x-90' : 'translate-x-90'}
              transition-transform duration-300
            `}
          >
            <ServicesCard logo={service.logo} title={service.title} description={service.description} />
          </div>
        ))}
      </div>
    </section>
    </main>
  )
}

export default Services