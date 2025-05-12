import React from 'react'
import WebsiteCards from '../Cards/WebsiteCards'
import Image from 'next/image'

const Portfolio = () => {
    const websites = [
        { src: "/placeholder.jpg", title: "MarketPlace Website like Ouedkniss \n(Next.js, MongoDB)" },
        { src: "/placeholder.jpg", title: "Stocka a Warehouse Management System \n(Next.js, MongoDB)" },
        { src: "/placeholder.jpg", title: "A landing Page for a TowTruck Company\n(Next.js, Tailwindcss)" },
    ]
    
  return (
    <div className='my-24 w-full flex-col flex relative'>
        <Image src="/gridline.svg" width={96} height={96} alt="placeholder" className='absolute w-full 
        h-full object-cover -z-10 opacity-10 skew-6 rounded-full blur-3xl' />
        <div 
            className='  
            text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 via-purple-500 
            to-indigo-500 w-72 '>
                
            <h1 className='text-left font-medium uppercase text-4xl 
            tracking-wider leading-26'>Portfolio
            </h1>
        </div>
        <div>
            <div className="grid group grid-cols-3 gap-8 mt-12">
                {websites.map((website, index) => (
                    <div  key={index}>
                        <WebsiteCards  src={website.src} title={website.title} />
                    </div>
                    
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio