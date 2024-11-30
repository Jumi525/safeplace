import { BookUser, ChartArea, PhoneCall, Users2 } from "lucide-react";
import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen bg-white">
      {/* Status Section */}
      <section className="px-4 py-3">
        <h2 className="font-bold text-gray-800">Personal profile</h2>
        <div className="flex justify-between gap-3 max-w-max mt-3">
          {[
            {
              name: "My status",
              image: "/asset/author-3.png",
              isNew: false,
            },
            { name: "Jerry", image: "/asset/author-4.png", isNew: true },
          ].map((status, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={status.image}
                alt={status.name}
                width={64}
                height={64}
                className={`w-16 h-16 rounded-full border-4 ${
                  status.isNew ? "border-[#008b8b]" : "border-gray-300"
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
          Channels <span className="text-[#008b8b] text-xs">Explore</span>
        </h2>
        <ul className="mt-3 space-y-3">
          {[
            {
              name: "Community forums",
              message: "The McRib and Nacho Fries...",
              time: "3:42 AM",
              unread: 1492,
              logo: "/asset/author-3.png",
            },
            {
              name: "Safety tips",
              message: "FINALLY FRIYAY!! 🎉",
              time: "11/22/24",
              unread: 1719,
              logo: "/asset/avatar-3.jpg",
            },
            {
              name: "Resources",
              message: "The future belongs to children...",
              time: "11/20/24",
              unread: 10,
              logo: "/asset/avatar-4.jpg",
            },
            {
              name: "Live updates",
              message: "The future belongs to children...",
              time: "11/20/24",
              unread: 300,
              logo: "/asset/avatar-2.jpg",
            },
            {
              name: "News",
              message: "The future belongs to children...",
              time: "11/20/24",
              unread: 9,
              logo: "/asset/avatar-1.jpg",
            },
          ].map((channel, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src={channel.logo}
                  alt={channel.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
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
                  <div className="bg-[#008b8b] ml-auto text-white text-xs rounded-full px-2 py-0.5 max-w-max">
                    {channel.unread}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#008b8b] rounded-t-md shadow-t border-t border-gray-200">
        <div className="flex justify-around items-center py-2">
          {[
            { label: "Chats", icon: <ChartArea /> },
            { label: "Updates", icon: <BookUser /> },
            { label: "Calls", icon: <PhoneCall /> },
            { label: "Communities", icon: <Users2 /> },
          ].map((tab, index) => (
            <div key={index} className="flex flex-col items-center ">
              <span className="material-icons text-[3E414A]">{tab.icon}</span>
              <p className="text-xs text-[3E414A]">{tab.label}</p>
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Home;
