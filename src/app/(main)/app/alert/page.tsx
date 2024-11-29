import {
  BookUser,
  Camera,
  ChartArea,
  MoreVertical,
  PhoneCall,
  Search,
  Users2,
} from "lucide-react";
import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 shadow">
        <h1 className="text-lg font-bold text-gray-800">Updates</h1>
        <div className="flex gap-2">
          <button className="hover:bg-black/50 min-w-max p-1 rounded-full">
            <Camera />
          </button>
          <button className=" min-w-max p-1 rounded-full">
            <Search />
          </button>
          <button className="min-w-max p-1 rounded-full">
            <MoreVertical />
          </button>
        </div>
      </header>

      {/* Status Section */}
      <section className="px-4 py-3">
        <h2 className="font-bold text-gray-800">Status</h2>
        <div className="flex justify-between mt-3">
          {[
            {
              name: "My status",
              image: "/asset/author-3.png",
              isNew: false,
            },
            { name: "Jerry", image: "/asset/author-4.png", isNew: true },
            { name: "Nsibiet", image: "/asset/author-7.png", isNew: true },
            { name: "Edidiong", image: "/asset/author-8.png", isNew: true },
          ].map((status, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={status.image}
                alt={status.name}
                width={64}
                height={64}
                className={`w-16 h-16 rounded-full border-4 ${
                  status.isNew ? "border-green-500" : "border-gray-300"
                }`}
              />
              <p className="text-xs text-gray-600 mt-1">{status.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Channels Section */}
      <section className="px-4 py-3">
        <h2 className="font-bold text-gray-800 flex justify-between items-center">
          Channels <span className="text-green-500 text-xs">Explore</span>
        </h2>
        <ul className="mt-3 space-y-3">
          {[
            {
              name: "CNN",
              message: "The McRib and Nacho Fries...",
              time: "3:42 AM",
              unread: 1492,
              logo: "/asset/author-3.png",
            },
            {
              name: "Netflix",
              message: "FINALLY FRIYAY!! 🎉",
              time: "11/22/24",
              unread: 1719,
              logo: "/asset/author-7.png",
            },
            {
              name: "UNICEF Supply",
              message: "The future belongs to children...",
              time: "11/20/24",
              unread: "",
              logo: "/asset/author-8.png",
            },
          ].map((channel, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src={channel.logo}
                  alt={channel.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    {channel.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {channel.message}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">{channel.time}</p>
                {channel.unread && (
                  <div className="bg-green-500 text-white text-xs rounded-full px-2 py-0.5">
                    {channel.unread}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow-t border-t border-gray-200">
        <div className="flex justify-around items-center py-2">
          {[
            { label: "Chats", icon: <ChartArea /> },
            { label: "Updates", icon: <BookUser /> },
            { label: "Calls", icon: <PhoneCall /> },
            { label: "Communities", icon: <Users2 /> },
          ].map((tab, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="material-icons text-gray-500">{tab.icon}</span>
              <p className="text-xs text-gray-500">{tab.label}</p>
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Home;
