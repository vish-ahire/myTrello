import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 p-4 flex-shrink-0 flex items-center justify-between">
      <div className="text-sm">
        © {new Date().getFullYear()} My Trello. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <a href="https://opensource.org/license/mit" className="hover:text-white" target="_blank" rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        <a
          href="https://opensource.org/license/mit"
          className="hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
