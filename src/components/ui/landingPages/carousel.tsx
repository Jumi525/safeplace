"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CarouselItems = [
  {
    svg: "/asset/clipart870636.png",
    link: "survelliance",
    name: "VIDEO SURVEILLIANCE",
    descript:
      "This app can analyse and provide real time visual overlays of emergencies that helps user understand the severity and extend of the incident",
  },
  {
    svg: "/asset/clipart3195066.png",
    link: "alert",
    name: "SAFE WINDOWS",
    descript:
      "This app provides detailed and interactive maps to help users navigate evacuation routes or emergency shelters. it has a safety features that allows users to report incidents.",
  },
  {
    svg: "/asset/clipart488294.png",
    link: "profile",
    name: "PROFILE",
    descript:
      "Users can create and customize personnal safety profile with medical information, emergency contacts , allergies, and other essentials details for first responders during emergencies",
  },
  {
    svg: "/asset/clipart2267689.png",
    link: "community",
    name: "COMMUNITY FORUM",
    descript:
      "A platform for users to share stories, advices and information related to emergency response and safety",
  },
];

export default function Carousels() {
  const router = useRouter();
  return (
    <section className="bg-[#29353C] h-screen w-screen">
      <Carousel className="w-screen mx-auto h-screen">
        <CarouselContent className="w-screen h-screen">
          {CarouselItems.map((value, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1 h-full w-screen">
                <Card className="p-1 h-full w-full bg-[#768A96]">
                  <CardContent className="flex items-center justify-center w-full h-full p-6">
                    <div className=" relative bg-[#DFEBF6] h-full w-full grid grid-rows-3 justify-center items-center">
                      <p className=" font-bold text-lg text-center">
                        {value.name}
                      </p>
                      <Image
                        src={value.svg}
                        alt="imgs"
                        height={300}
                        width={300}
                        onClick={() => router.push(`/app/${value.link}`)}
                        className="w-[180px] mx-auto -mt-2 h-[180px] object-cover md:w-[300px] md:h-[300px]"
                      />
                      <p className="max-w-[500px]  -mt-5  text-sm text-center mx-4 pt-2">
                        {value.descript}
                      </p>

                      <p className="absolute bottom-5 text-sm left-0 right-0 max-w-max max-h-max mx-auto">
                        {index + 1}/4
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
