import React from 'react'
import LogoCards from '../Cards/LogoCards';

const Skills = () => {
    const top = [
        {
            logo : '/logoweb/html.png',
            title : 'HTML',
        },
        {
            logo : '/logoweb/css.png',
            title : 'CSS',
        },
        {
            logo : '/logoweb/js.png',
            title : 'JavaScript',
        },
        {
            logo : '/logoweb/ts.svg',
            title : 'TypeScript',
        },
      
        {
            logo : '/logoweb/bootstrap.png', 
            title : 'Bootstrap',
        },
        {
            logo  : '/logoweb/tailwind.png',
            title : 'Tailwind CSS',
        },
        {
            logo : '/logoweb/react.png',
            title : 'React',
        }
    ];

    const bottom = [
        {
            logo : '/logoweb/nextjs.png',
            title : 'Next.js',
        },
        {
            logo : '/logoweb/flutter.png',
            title : 'Flutter',
        },
        {
            logo : '/logoweb/mongodb.png',
            title : ''
            
        },
        {
            logo : '/logoweb/git.png',
            title : 'Git',
        },
        {
            logo : '/logoweb/github.png',
            title : 'GitHub',
        },

    ]
  return (
    <div className="flex flex-col relative">
  {/* Title */}
  <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-72">
    <h1 className="text-left font-medium uppercase text-4xl tracking-wider leading-26">My Skills</h1>
  </div>
    
    {/* Description */}
    <p className="text-white text-5xl font-medium mt-4 mb-20 text-center tracking-wider">
        The skills, tools and Technologies I use: 
    </p>
    <div className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full top-[250px] left-[300px] z-0" />

    
  {/* All skills in a shared group */}
  <div className="group flex flex-col gap-8 items-center">
    {/* Top row */}
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 ">
      {top.map((item, index) => (
        <LogoCards key={index} src={item.logo} title={item.title} />
        
      ))}
      {bottom.map((item, index) => (
        <LogoCards key={index} src={item.logo} title={item.title} />
      ))}
    </div>

    {/* Bottom row */}
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
      
    </div>
  </div>
</div>

  )
}

export default Skills