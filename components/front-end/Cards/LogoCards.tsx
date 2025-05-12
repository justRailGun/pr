// LogoCards.tsx
import Image from 'next/image';
import React from 'react';

const LogoCards = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="group-hover:blur-sm group-hover:scale-95 group-hover:opacity-70 group-hover:transition-all 
    duration-300 ease-in-out relative flex flex-col items-center justify-center w-32 h-32 gap-4 transition-all  
     hover:scale-110 hover:blur-none hover:opacity-100 hover:grayscale-0">
      {/* Main sharp image */}
      <Image
        src={src}
        alt="logo"
        width={96}
        height={96}
        className="relative z-10"
      />
      <h2 className="text-lg font-medium font-poppins text-white/90">
        {title}
      </h2>
    </div>
  );
};

export default LogoCards;
