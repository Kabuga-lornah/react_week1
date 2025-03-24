import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const genres = [
    { name: "Amapiano", description: "Vibrant South African sound.", link: "/amapiano" },
    { name: "RnB's", description: "Smooth rhythm and blues.", link: "/rnb" },
    { name: "80's Songs", description: "Iconic 1980s hits.", link: "/eighty" },
    { name: "90's Songs", description: "Classic 1990s tracks.", link: "/ninety" },
    { name: "Trap", description: "Hard-hitting beats.", link: "/trap" },
    { name: "Rhumba", description: "Danceable African rhythms.", link: "/rhumba" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 uppercase mb-4 tracking-wide">
          Explore Music Genres
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Discover the rich diversity of music. Click on any genre to explore top songs and immerse yourself in different sounds.
        </p>
      </div>
      
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {genres.map((genre, index) => (
          <Link 
            to={genre.link}
            key={index}
            className="transform transition-all hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all h-full border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{genre.name}</h2>
              <p className="text-gray-600 text-base leading-relaxed">{genre.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
