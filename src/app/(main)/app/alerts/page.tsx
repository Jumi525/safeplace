import { Keyboard, Languages, Palette, SparkleIcon, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen bg-white px-3">
      {/* Header */}
      <header className="max-w-max pt-3 flex gap-2 items-center bg-transparent py-4">
        <Link href={"/"} className="text-gray-700 ml-3 mr-2 h-11 w-11 relative">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="300.000000pt"
            height="177.000000pt"
            viewBox="0 0 300.000000 177.000000"
            preserveAspectRatio="xMidYMid meet"
            className="h-40 w-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <metadata>
              Created by potrace 1.10, written by Peter Selinger 2001-2011
            </metadata>
            <g
              transform="translate(0.000000,177.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                className="fill-[#29353C]"
                d="M1378 1297 c-42 -12 -70 -28 -145 -83 -21 -15 -24 -15 -49 5 -15 12
-33 21 -40 21 -8 0 -14 5 -14 10 0 17 -26 11 -45 -10 -10 -11 -19 -30 -20 -44
-4 -31 -32 -74 -55 -81 -47 -15 -74 -87 -59 -156 9 -40 8 -43 -22 -68 -32 -27
-32 -28 -21 -77 6 -27 14 -62 18 -79 3 -18 26 -50 56 -79 91 -87 216 -127 373
-119 96 6 133 6 290 1 116 -3 184 11 267 55 68 35 148 116 148 149 0 19 -6 16
-44 -27 -55 -63 -132 -109 -216 -131 -52 -13 -89 -15 -180 -10 -138 8 -121 8
-247 0 -175 -11 -298 29 -395 128 -59 61 -62 77 -5 38 29 -20 63 -33 111 -40
38 -6 94 -20 124 -30 67 -24 58 -10 -13 20 -36 15 -42 19 -20 16 17 -3 38 -8
49 -12 14 -5 12 2 -12 35 -45 62 -67 134 -66 218 1 94 42 181 115 247 73 66
142 89 249 84 99 -5 147 -25 220 -94 70 -65 104 -147 105 -249 0 -67 -4 -89
-28 -140 -16 -33 -38 -71 -50 -84 -21 -23 -21 -24 -2 -17 31 12 75 19 75 13 0
-3 -22 -13 -50 -22 -27 -9 -52 -20 -55 -25 -3 -4 29 3 70 16 42 13 90 24 108
24 52 1 157 60 157 89 0 6 5 11 10 11 6 0 10 18 10 40 0 34 -4 42 -30 55 -29
15 -39 38 -22 49 15 9 12 75 -4 116 -10 25 -26 44 -44 52 -31 13 -60 55 -60
85 0 16 -33 63 -44 63 -9 0 -73 -35 -89 -48 -16 -14 -21 -12 -55 15 -66 53
-128 75 -222 79 -51 2 -104 -1 -132 -9z m-254 -72 c7 -20 -11 -68 -24 -60 -11
7 -13 35 -4 59 8 20 20 20 28 1z m762 -10 c3 -14 3 -33 0 -42 -6 -15 -8 -15
-16 -3 -13 20 -13 70 0 70 5 0 12 -11 16 -25z m-710 -37 c-6 -32 -32 -68 -48
-68 -14 0 -9 34 12 68 26 42 45 42 36 0z m680 -36 c6 -27 4 -31 -10 -26 -19 7
-19 9 -1 -41 8 -22 14 -65 13 -95 l-1 -55 -7 60 c-4 33 -17 83 -30 110 -13 28
-26 55 -28 60 -3 6 5 -1 16 -15 25 -29 28 -23 8 15 -8 15 -12 34 -9 42 9 22
41 -14 49 -55z m-674 -9 c-26 -37 -52 -116 -52 -158 0 -33 -31 -118 -47 -128
-4 -3 -8 18 -9 46 0 29 -8 67 -18 85 -24 45 -30 35 -11 -18 16 -46 20 -120 6
-120 -4 0 -22 27 -40 59 -35 67 -40 124 -14 174 l16 32 8 -27 c4 -15 23 -41
43 -58 20 -18 40 -46 44 -64 8 -28 9 -24 15 36 6 66 24 116 55 151 23 26 26
20 4 -10z m-67 -63 c0 -56 -19 -71 -39 -32 -17 33 -20 69 -10 97 6 15 9 15 28
-4 14 -14 21 -34 21 -61z m805 27 c0 -44 -24 -92 -41 -82 -15 10 -10 89 7 113
21 31 34 19 34 -31z m80 -59 c8 -29 8 -49 -1 -76 -15 -48 -57 -122 -69 -122
-15 0 -11 69 5 115 18 49 12 57 -10 14 -10 -18 -17 -55 -17 -82 l0 -50 -19 24
c-37 48 -17 127 41 169 20 14 30 30 30 47 0 21 2 23 15 13 8 -7 20 -30 25 -52z
m-967 -214 c39 -28 88 -97 76 -108 -2 -3 -22 -1 -44 4 -66 15 -119 66 -131
128 l-7 32 32 -13 c17 -7 50 -27 74 -43z m1012 10 c-28 -66 -74 -104 -142
-117 -41 -8 -42 2 -3 58 21 31 48 52 92 74 34 17 63 29 65 27 2 -2 -3 -21 -12
-42z m-875 -60 c11 -12 10 -18 -3 -32 -16 -15 -18 -15 -34 0 -13 14 -14 20 -3
32 7 9 16 16 20 16 4 0 13 -7 20 -16z m687 0 c7 -19 -20 -49 -36 -40 -12 8
-15 39 -4 49 12 12 33 7 40 -9z"
              />
              <path
                className="fill-[#29353C]"
                d="M1393 1241 c-149 -51 -229 -169 -221 -324 6 -121 71 -223 176 -274
49 -24 69 -28 142 -28 73 0 93 4 142 28 190 93 241 343 103 505 -37 44 -90 77
-155 96 -69 21 -122 20 -187 -3z m218 -40 c56 -25 123 -96 149 -157 28 -65 27
-159 -4 -226 -48 -107 -140 -167 -262 -170 -93 -2 -159 27 -219 96 -57 64 -75
120 -72 212 3 60 8 79 35 121 17 27 42 59 54 70 27 25 93 63 128 73 43 13 143
3 191 -19z"
              />
              <path
                className="fill-[#29353C]"
                d="M1443 1082 c-29 -4 -63 -48 -63 -81 0 -14 14 -44 30 -65 33 -44 37
-56 17 -56 -23 0 -49 -37 -43 -58 9 -28 44 -38 112 -32 77 6 104 27 104 80 0
26 -9 48 -30 75 -30 37 -30 38 -10 55 25 21 26 52 3 72 -17 15 -61 18 -120 10z
m117 -42 c0 -23 -17 -25 -44 -5 -14 11 -23 12 -33 4 -22 -19 -15 -38 37 -90
64 -64 69 -102 15 -125 -19 -7 -55 -14 -80 -14 -41 0 -45 2 -45 25 0 28 12 32
30 9 8 -8 25 -14 39 -12 43 5 37 37 -19 96 -78 83 -61 132 47 132 46 0 53 -3
53 -20z"
              />
            </g>
          </svg>
        </Link>
        <h1 className="text-lg font-semibold text-gray-900">SHELTER</h1>
      </header>

      {/* Main Content */}
      <section className="w-full mt-4 rounded-lg">
        {/* Title */}
        <div className="flex items-center gap-3 border-t-[1px] py-2 border-b-[1px] border-solid border-black/30">
          <SparkleIcon />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Anonymous report
            </h2>
            <p className="text-sm text-gray-600">
              Suggestions, tone detection, predictive text
            </p>
          </div>
        </div>

        {/* Options */}
        <ul className="divide-y divide-gray-300">
          {[
            { label: "Community Forum", icon: <Palette /> },
            { label: "Community Response", icon: <Languages /> },
            { label: "Contacts", icon: <Keyboard /> },
            { label: "ChecK-in System", icon: <User /> },
            // { label: "Feedback", icon: <NotepadText /> },
            // { label: "Support", icon: <CircleAlert /> },
            // { label: "About", icon: <Info /> },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between py-3 cursor-pointer hover:bg-blue-100"
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
