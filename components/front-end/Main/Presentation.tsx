// import { Button } from '@/components/ui/button'
import { Briefcase } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Presentation = () => {
  return (
    <div className='my-12 sm:my-24 w-full flex xl:flex-row flex-col-reverse justify-between items-center  border-white/20'>
        {/* left side */}
        <div className='flex flex-col pt-12 gap-16 w-full  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
            {/* title */}
            <h1 className=' text-center md:text-start font-bold sm:font-medium uppercase text-6xl sm:text-7xl sm:tracking-wider leading-20 sm:leading-26'>
              FrontEnd<br />
              Developer
            </h1>

            {/* description */}
            <p className="text-white/80 text-center md:text-start leading-relaxed text-lg font-light">
  I&apos;m <span className="text-teal-400 font-semibold">Bouaoune Djamel</span>, also known as <span className="text-teal-400 font-semibold">Jimmy</span>. I&apos;m a <span className="text-emerald-400 font-semibold">Full Stack Web Developer</span> specializing in <span className="text-sky-400 font-semibold">React</span>, <span className="text-sky-400 font-semibold">Next.js</span>, <span className="text-indigo-400 font-semibold">TypeScript</span>, <span className="text-green-400 font-semibold">MongoDB</span>, and <span className="text-cyan-400 font-semibold">Tailwind CSS</span>. I build <span className="text-emerald-400 font-semibold">scalable</span>, <span className="text-emerald-400 font-semibold">high-performance</span> web applications using modern frameworks and technologies.
            </p>
            {/* button */}
            
            <div className='flex md:items-start md:justify-start justify-center gap-4 mt-12'>
           
                <div className='cursor-pointer relative rounded-full p-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
                    
                    <div className='flex items-center gap-4 justify-center bg-[#111723] text-white/80 px-8 py-4 rounded-full'>My Portfolio 
                    <Briefcase className='inline-block mr-2' size={20} color='white'/></div>
                    <div
    className="absolute -inset-1 z-[-1]  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  opacity-75 blur rounded-full"
  ></div>
                </div>
            </div>
        
        </div>
        {/* right side */}
        <div className='flex justify-end relative'>
            <Image src="/main1.svg" alt="bouaoune" width={800} height={800} />
            <div className="absolute w-84 h-84 bg-pink-500/20 blur-3xl rounded-full top-[50px] left-[450px] z-[-1]" />

            <div className="absolute w-84 h-84 bg-indigo-500/20 blur-3xl rounded-full top-[50px] right-[350px] z-[-1]" />

        </div>
    </div>
  )
}

export default Presentation