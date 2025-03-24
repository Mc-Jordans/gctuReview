import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/gctuLogo.png";

function NavBar() {
  return (
    <header className="bg-white dark:bg-gray-950 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Logo} width={50} />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              GCTU Feedback
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="/departments"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Departments
            </Link>
          </nav>
          <button className="md:hidden px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
