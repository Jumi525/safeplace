import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Eraser, Menu, Phone } from "lucide-react";

const Dial = () => {
  const [isOpen, setisOpen] = useState(false);
  const [number, setNumber] = useState<string>("");
  const ButtonNumber = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "0",
    "#",
  ];
  return (
    <>
      <Button onClick={() => setisOpen(!isOpen)} className="mb-4">
        <Menu />
      </Button>
      <div
        className={cn(
          "max-w-[300px] hidden bg-yellow-600 gap-2 place-content-center grid-cols-3 grid-rows-5",
          { "grid ": isOpen }
        )}
      >
        <div className="col-span-3 relative mb-2 rounded-md ">
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full h-full text-center bg-green-500"
          />
          <button
            className="absolute h-5 w-5 right-2 hover:bg-green-500 top-0 bottom-0 my-auto"
            onClick={() => {
              const numbers = number.slice(0, number.length - 1);
              setNumber(numbers);
            }}
          >
            <Eraser />
          </button>
        </div>
        {ButtonNumber.map((value) => (
          <Button
            key={value}
            value={value}
            onClick={(e) => setNumber(number + e.currentTarget?.value)}
            className="rounded-full py-5 max-w-max m-auto"
          >
            {value}
          </Button>
        ))}
        <Button className="rounded-full py-6 max-w-max m-auto bg-green-500 col-span-3">
          <Phone />
        </Button>
      </div>
    </>
  );
};

export default Dial;
