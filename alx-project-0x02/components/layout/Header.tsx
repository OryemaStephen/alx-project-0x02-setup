import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home">
              <span className="hover:text-blue-600 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-blue-600 cursor-pointer">About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;