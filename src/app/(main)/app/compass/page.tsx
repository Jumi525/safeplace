"use client";

import React, { useEffect, useState } from "react";

const CompassPage = () => {
  const [heading, setHeading] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        setHeading(event.alpha); // Alpha gives the compass heading in degrees
      } else {
        setError("Device orientation is not supported on this device.");
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    } else {
      setError("Device orientation is not supported on this browser.");
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Compass</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="relative w-64 h-64 rounded-full bg-blue-500 border-4 border-gray-300 shadow-lg">
          {/* North Indicator */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-bold">
            N
          </div>
          {/* Compass Arrow */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `rotate(${heading ? -heading : 0}deg)`,
            }}
          >
            <div className="w-8 h-32 bg-red-500 rounded-t-lg transform -translate-y-1/2"></div>
          </div>
        </div>
      )}
      <p className="mt-4 text-gray-700">
        {heading !== null
          ? `Heading: ${Math.round(heading)}°`
          : "Calibrating..."}
      </p>
    </div>
  );
};

export default CompassPage;
