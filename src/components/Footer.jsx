import React from 'react'
import Logo from "../assets/gctuLogo.png";


function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src={Logo} width={50} />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              GCTU Feedback
            </span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ghana Communication Technology
            University. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer