import React from 'react';

const CalltoUnity = () => {
  // Link to YouTube
  const youtubeLink = "https://youtu.be/rnyxMXqNl68";

  return (
    <div className="w-full bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 py-16 px-4 text-white">
      <div className="text-center">
        <h3 className="text-3xl md:text-5xl font-bold text-white">
          Let’s Stand United as One Nation!
        </h3>
        <p className="mt-4 text-lg md:text-xl">
          Jamhuri Day is a powerful reminder of how far we have come as a country. Our diversity is our strength, and together, we can continue to build a united, prosperous Kenya.
        </p>
        <p className="mt-4 text-lg md:text-xl">
          Today, let us celebrate not only our independence but also our shared identity, resilience, and future.
        </p>
        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
        >
          Join the Celebration
        </a>
      </div>
    </div>
  );
};

export default CalltoUnity;
