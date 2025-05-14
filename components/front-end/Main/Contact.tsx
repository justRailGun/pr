import React from 'react'
import FormCard from '../Cards/formCard'
import { MessageSquareMore , Instagram , Linkedin , Facebook , Twitter , Github} from 'lucide-react'
const Contact = () => {
  return (
    <div className='flex flex-row justify-center relative my-12 gap-18'>
        <div className='w-96 h-64 bg-blue-800/20 blur-3xl rounded-full absolute top-48 right-[80%] '/>
        <div 
        className='flex flex-col gap-4 w-1/3 uppercase '>
            <h2 className='bg-clip-text text-transparent text-2xl font-medium tracking-wider
            bg-gradient-to-r from-red-500  to-blue-500'>
                Do you have a project you want to <br /> Discuss?</h2>

            <h2 className='flex text-2xl font-medium tracking-wider gap-4 mb-8'>
                get in touch 
                <MessageSquareMore className='inline-block mr-2' size={30} color='white'/>
                </h2>

            {/* contacts */}

            <div className='flex flex-row gap-4 items-center'>
                <div className='w-1/2 flex flex-col gap-4'>
                    <h3>Contact </h3>
                    {/* email */}
                    <p className='text-sm text-blue-500/80 lowercase'>djamelbouaoune17@gmail.com</p>
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                    <h3>Social Media</h3>
                    <div className='flex flex-row  gap-4'>
                        {/* logo */}
                        <Instagram className='inline-block opacity-60 cursor-pointer 
                        hover:opacity-100 hover:scale-110 transition-all ease-in-out duration-300' size={20} color='white'/>
                        <Twitter className='inline-block opacity-60 cursor-pointer 
                        hover:opacity-100 hover:scale-110 transition-all ease-in-out duration-300' size={20} color='white'/>
                        <Github className='inline-block opacity-60 cursor-pointer 
                        hover:opacity-100 hover:scale-110 transition-all ease-in-out duration-300' size={20} color='white'/>
                        <Linkedin className='inline-block opacity-60 cursor-pointer 
                        hover:opacity-100 hover:scale-110 transition-all ease-in-out duration-300' size={20} color='white'/>
                        <Facebook className='inline-block opacity-60 cursor-pointer 
                        hover:opacity-100 hover:scale-110 transition-all ease-in-out duration-300' size={20} color='white'/>
                    </div>
                </div>
        
            </div>
        </div>
        <div className='flex flex-col gap-4 w-1/3'>
            <h2 className='uppercase text-xl font-medium tracking-wider text-white/60 mb-10'>Contact Form</h2>
            {/* form */}
            <FormCard />
        </div>
    </div>
  )
}

export default Contact