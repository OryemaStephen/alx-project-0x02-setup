import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <nav>
        <div className="flex gap-6 space-x-4">
            <Link href="/home">
              <span className="hover:text-blue-600 cursor-pointer">Home</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-blue-600 cursor-pointer">About</span>
            </Link>
             <Link href="/posts">
              <span className="hover:text-blue-600 cursor-pointer">Posts</span>
            </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;