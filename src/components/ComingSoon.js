import React, { useState, useEffect } from 'react';
import '../index.css';

const calculateTimeLeft = () => {
  const difference = +new Date('2024-04-20') - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const ScrollingNumberCard = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center mx-2 text-center">
      <div className="static-number bg-black opacity-85 text-white font-mono text-2xl sm:text-3xl lg:text-5xl p-2 lg:p-4 rounded-md shadow-lg">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm lg:text-base text-black mt-1">{label.toUpperCase()}</div>
    </div>
  );
};

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const scrollingNumbers = (
    <div className="flex justify-center space-x-2 sm:space-x-4 lg:space-x-6 mt-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <ScrollingNumberCard key={unit} value={value} label={unit} />
      ))}
    </div>
  );

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden font-poppins">
      {/* Red Section */}
      <div className="bg-red-600 text-white text-center p-5 sm:p-8 lg:p-16 flex flex-1 justify-center items-center" style={{ minHeight: '33.333333%' }}>
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-9xl font-bold uppercase tracking-wider">Snapfest420</h1>
          <p className="text-xl sm:text-2xl lg:text-6xl font-bold mt-4">All of your wildest dreams will come true</p>
          <p className="text-xl sm:text-2xl lg:text-6xl font-bold">April 20th, 2024 @ Miller Park</p>
        </div>
      </div>

      {/* Blue Section */}
      <div className="relative bg-blue-600 flex-2 bg-leaf-pattern" style={{ minHeight: '66.666667%' }}>
        <div className="relative text-center p-5 sm:p-8 lg:p-16 flex flex-col justify-center items-center h-full">
          <div className="bg-white p-4 sm:p-6 lg:p-12 inline-block bg-opacity-90 rounded-3xl shadow-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-7xl text-black font-bold uppercase tracking-wider">Now Accepting</h2>
            <p className="text-lg sm:text-xl lg:text-4xl text-black mt-4">Vendors & Sponsors</p>
            {scrollingNumbers}
            <button type="button" className="mt-5 w-3/4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Become a Vendor Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
