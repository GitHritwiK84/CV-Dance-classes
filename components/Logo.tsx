import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-16 w-auto" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="CV Dance Classes Logo" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Logo;
