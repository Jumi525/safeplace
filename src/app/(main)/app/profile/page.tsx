import { LocateIcon, Map, Route, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const LocationApp: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#008b8b] min-h-screen max-h-screen flex flex-col justify-around shadow-md p-4">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-blue-200 grid place-content-center font-bold text-5xl">
          M
        </div>
        <h2 className="text-lg font-bold text-gray-800 mt-2">Mmenyene</h2>
        <p className="text-sm text-gray-600">mmenyene123@gmail.com</p>
      </div>
      <div className="mt-6 space-y-4 ">
        {[
          { label: "compass", icon: <Map /> },
          { label: "map", icon: <Route /> },
          { label: "#Tracking", icon: <LocateIcon /> },
          { label: "#Setting", icon: <Settings /> },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.label}
            className="flex items-center px-4 py-2 bg-blue-100 rounded-lg w-full"
          >
            <span className="material-icons text-blue-500">{item.icon}</span>
            <p className="ml-4 text-gray-800">{item.label}</p>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <Link
          href={"/"}
          className="px-4 py-2 bg-[#3E414a] text-white rounded-lg"
        >
          Home
        </Link>
        <button className="px-4 py-2 bg-blue-200 text-gray-700 rounded-lg">
          Sign Out
        </button>
      </div>
    </div>
  );

  {
    /* Map Navigation Screen */
  }
  {
    /* <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 mt-8">
        <div className="relative w-full h-56 bg-gray-200 rounded-lg">
          <p className="absolute inset-0 flex justify-center items-center text-gray-400">
            Map Placeholder
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Direction
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
            Done
          </button>
        </div>
      </div> */
  }

  {
    /* Route Details Screen */
  }
  {
    /* <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 mt-8">
        <h2 className="text-lg font-bold text-gray-800">
          Wyoming Cemetery 123LBC
        </h2>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between">
            <span className="text-gray-600">500m</span>
            <span className="text-gray-800">Route 1</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600">300m</span>
            <span className="text-gray-800">Route 2</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600">25m</span>
            <span className="text-gray-800">Final Destination</span>
          </li>
        </ul>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
            Recenter
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Finish
          </button>
        </div>
      </div> */
  }
};

export default LocationApp;
