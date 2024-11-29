import {
  ArrowUpCircle,
  CircleAlert,
  Info,
  Keyboard,
  Languages,
  NotepadText,
  Palette,
  SparkleIcon,
  User,
} from "lucide-react";
import React from "react";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-3">
      {/* Header */}
      <header className="max-w-max mt-3 flex gap-2 items-center bg-white py-4 shadow-md">
        <button className="text-gray-700">
          <ArrowUpCircle />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">grammarly</h1>
      </header>

      {/* Main Content */}
      <section className="w-full mt-4 rounded-lg shadow-md">
        {/* Title */}
        <div className="flex items-center gap-3 border-t-[1px] py-2 border-b-[1px] border-solid border-black/30">
          <SparkleIcon />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Writing Assistance
            </h2>
            <p className="text-sm text-gray-600">
              Suggestions, tone detection, predictive text
            </p>
          </div>
        </div>

        {/* Options */}
        <ul className="divide-y divide-gray-200">
          {[
            { label: "Theme", icon: <Palette /> },
            { label: "Languages", icon: <Languages /> },
            { label: "Keyboard", icon: <Keyboard /> },
            { label: "Account", icon: <User /> },
            { label: "Feedback", icon: <NotepadText /> },
            { label: "Support", icon: <CircleAlert /> },
            { label: "About", icon: <Info /> },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between py-3 cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="text-sm text-gray-800">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Home;
