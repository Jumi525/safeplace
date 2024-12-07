"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import "leaflet/dist/leaflet.css";

// Dynamically import MapContainer to disable SSR (map only renders on the client-side)
const MapWithNoSSR = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const MapWithSearch = () => {
  const { toast } = useToast();
  const [location, setLocation] = useState<string>("");
  const [position, setPosition] = useState<[number, number] | null>(null);

  // Fetch geocoded coordinates from Nominatim (OpenStreetMap) based on the input location
  const fetchLocationCoordinates = async () => {
    try {
      if (!location) return;

      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          location
        )}&format=json`
      );
      console.log(response, "res");
      if (response.data && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);
        toast({
          title: "Location Found",
          description: `Location: ${location} (${lat}, ${lon})`,
        });
      } else {
        toast({
          title: "Location Not Found",
          description: "Please enter a valid location.",
        });
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      toast({
        description: "Failed to fetch location. Please try again.",
      });
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Input for the location */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 p-4 bg-white shadow-md rounded-md z-10">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a location (e.g., New York)"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={fetchLocationCoordinates}
          className="mt-2 p-2 bg-[#008b8b] text-white rounded-md"
        >
          Find Location
        </button>
      </div>

      {/* Leaflet map */}
      {position && (
        <MapWithNoSSR
          center={position}
          zoom={13}
          style={{ height: "100vh", width: "100%" }} // Ensure map takes full height and width
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>{location}</Popup>
          </Marker>
        </MapWithNoSSR>
      )}
    </div>
  );
};

export default MapWithSearch;
