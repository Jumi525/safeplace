import React from "react";
import Dial from "./dial";

const Profile = () => {
  return (
    <section
      className=" w-full p-4 h-screen
  "
    >
      <p className="font-bold text-lg text-center">MMENYENE</p>
      <p className="pt-3">
        Location: <span className="font-bold">CROSS RIVER</span>
      </p>
      <div className="pt-2">
        <p>Friends</p>
        <div className="flex items-center flex-nowrap gap-2 overflow-x-scroll py-3 scrolls">
          <div className="h-14 w-14 bg-green-600 rounded-md shrink-0"></div>
          <div className="h-14 w-14 bg-green-600 rounded-md shrink-0"></div>
          <div className="h-14 w-14 bg-green-600 rounded-md shrink-0"></div>
          <div className="h-14 w-14 bg-green-600 rounded-md shrink-0"></div>
          <div className="h-14 w-14 bg-green-600 rounded-md shrink-0"></div>
          <div className="h-14 w-14 bg-green-600 rounded-md shrink-0"></div>
          <div className="h-14 w-14 bg-green-600 rounded-md shrink-0"></div>
        </div>
      </div>
      <Dial />
    </section>
  );
};

export default Profile;
