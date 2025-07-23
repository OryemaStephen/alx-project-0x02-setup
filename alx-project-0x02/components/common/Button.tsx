import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ children, size, shape,className }) => {
    const buttonClass=`bg-black hover:bg-black/70 text-white
    ${size==='small'?'text-sm px-3 py-1': size==='medium'?'text-base px-4 py-2':'text-lg px-6 py-3'}
    ${shape==='rounded-sm'?'rounded-sm': shape==='rounded-md'?'rounded-md':'rounded-full'}
    `
  return (
      <button className={`${buttonClass} ${className}`}>
        {children}
      </button>
  );
};

export default Button;