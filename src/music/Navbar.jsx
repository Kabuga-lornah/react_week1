import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const genres = [
    { name: "Amapiano", path: "/amapiano" },
    { name: "RnB", path: "/rnb" },
    { name: "80s", path: "/eighty" },
    { name: "90s", path: "/ninety" },
    { name: "Trap", path: "/trap" },
    { name: "Rhumba", path: "/rhumba" }
  ];

  return (
    <div>
      <nav className="bg-white border border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">
              Melodically
            </span>
          </Link>

          <div className="flex items-center md:order-2">
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          <div className="hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700 md:p-0">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <button className="flex items-center py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700 md:p-0">
                  Genre
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-48 py-1 z-10">
                  {genres.map((genre) => (
                    <Link
                      key={genre.path}
                      to={genre.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {genre.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;