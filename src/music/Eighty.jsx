import React from "react";

function Eighty() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 leading-snug">
          When Words Fail, 80's Songs Speak
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Perfect for Late Nights and Early Mornings
        </p>
        <ul className="list-decimal list-inside space-y-3 text-gray-800 text-base">
          <li>Michael Jackson — <span className="font-semibold">Billie Jean</span></li>
          <li>Whitney Houston — <span className="font-semibold">I Wanna Dance with Somebody</span></li>
          <li>Bon Jovi — <span className="font-semibold">Livin' on a Prayer</span></li>
          <li>Prince — <span className="font-semibold">Purple Rain</span></li>
          <li>Madonna — <span className="font-semibold">Like a Virgin</span></li>
          <li>George Michael — <span className="font-semibold">Faith</span></li>
          <li>A-ha — <span className="font-semibold">Take On Me</span></li>
          <li>Cyndi Lauper — <span className="font-semibold">Girls Just Want to Have Fun</span></li>
          <li>Toto — <span className="font-semibold">Africa</span></li>
          <li>Phil Collins — <span className="font-semibold">In the Air Tonight</span></li>
          <li>Queen — <span className="font-semibold">Another One Bites the Dust</span></li>
          <li>Journey — <span className="font-semibold">Don't Stop Believin'</span></li>
          <li>Rick Astley — <span className="font-semibold">Never Gonna Give You Up</span></li>
          <li>The Police — <span className="font-semibold">Every Breath You Take</span></li>
          <li>Kenny Loggins — <span className="font-semibold">Footloose</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Eighty;