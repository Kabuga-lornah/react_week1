import React from 'react';

const Trap = () => {
  const songs = [
    { artist: "Future", title: "Mask Off" },
    { artist: "Migos", title: "Bad and Boujee (feat. Lil Uzi Vert)" },
    { artist: "Travis Scott", title: "Goosebumps" },
    { artist: "21 Savage", title: "Bank Account" },
    { artist: "Kodak Black", title: "Tunnel Vision" },
    { artist: "Roddy Ricch", title: "The Box" },
    { artist: "Moneybagg Yo", title: "Said Sum" },
    { artist: "Young Jeezy", title: "Put On (feat. Kanye West)" },
    { artist: "NLE Choppa", title: "Shotta Flow" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 leading-snug">
          Trap Music Hits
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Enjoy some of the best trap songs that define heavy beats and unstoppable energy.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-800 text-base">
          {songs.map((song, index) => (
            <li key={index}>
              <span className="font-semibold">{song.artist}</span> — {song.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trap;