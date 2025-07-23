import { PostProps } from '@/interfaces';
import React from 'react';

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
      <div className='rounded-md p-6 bg-[#E9E9E9]'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='my-4'>{content}</p>
        <span className='text-sm text-gray-500'>UserId: {userId}</span>
    </div>
  );
};

export default PostCard;