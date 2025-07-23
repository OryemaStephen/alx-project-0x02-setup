import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
      <div className='rounded-md p-6 bg-[#E9E9E9]'>
        <h1 className='text-2xl font-bold mb-4'>{title}</h1>
        <p>{content}</p>
    </div>
  );
};

export default Card;