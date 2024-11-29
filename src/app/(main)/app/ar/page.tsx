"use client";
export const dynamic = "force-dynamic";
import axios from "axios";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type suggestionProps = {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
};

type stepProps = {
  end_location: { lat: number; lng: number };
};

const ARMapCompass = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [destination, setDestination] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [heading, setHeading] = useState<number | null>(null);
  // const [placeInput, setPlaceInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<suggestionProps[]>([]);

  useEffect(() => {
    // Simulate device orientation for development
    const simulatedHeading = 90; // East direction
    setHeading(simulatedHeading);
  }, []);

  // Fetch suggestions from Nominatim
  const fetchSuggestions = async (query: string) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Debounce user input for suggestions
  useEffect(() => {
    if (searchTerm.length > 2) {
      const timeoutId = setTimeout(() => {
        fetchSuggestions(searchTerm);
      }, 300); // Adjust debounce delay as needed
      return () => clearTimeout(timeoutId);
    }
  }, [searchTerm]);

  useEffect(() => {
    // Access Device Camera

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });

    // Watch user's location
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("User location updated:", latitude, longitude);
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (err) => console.error("Error getting location:", err),
      { enableHighAccuracy: true }
    );

    const calculateStaticDirection = () => {
      if (userLocation && destination) {
        const bearing = calculateBearing(userLocation, destination);
        console.log("Static Bearing to destination:", bearing);
        renderStaticArrow(bearing);
      }
    };

    const renderStaticArrow = (bearing: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((bearing * Math.PI) / 180); // Rotate arrow based on calculated bearing
      ctx.beginPath();
      ctx.moveTo(0, -50); // Arrow tip
      ctx.lineTo(20, 50); // Arrow right tail
      ctx.lineTo(-20, 50); // Arrow left tail
      ctx.closePath();
      ctx.fillStyle = "rgba(0, 0, 255, 0.7)";
      ctx.fill();
      ctx.restore();
    };

    // Watch device orientation
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        setHeading(event.alpha); // alpha gives the compass heading
        console.log("Device heading (alpha):", event.alpha);
      } else {
        console.log(
          "Device orientation not supported. Falling back to static compass."
        );
        calculateStaticDirection();
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      navigator.geolocation.clearWatch(watchId);
      window.removeEventListener("deviceorientation", handleOrientation);
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        stream.getTracks().forEach((track) => track.stop());
      });
    };
  }, []);

  // Fetch geocoded destination coordinates from Nominatim API
  const geocodeDestination = async (place: string) => {
    try {
      console.log("Geocoding place:", place);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          place
        )}&format=json`
      );
      const data = await response.json();

      console.log("Nominatim response:", data);

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        console.log("Geocoded destination:", lat, lon);
        setDestination({ lat: parseFloat(lat), lng: parseFloat(lon) });
        alert(`Destination set: ${place} (${lat}, ${lon})`);
      } else {
        alert("Location not found. Please enter a valid place.");
      }
    } catch (error) {
      console.error("Error fetching geocoded destination:", error);
      alert("Failed to fetch destination. Please try again.");
    }
  };

  // Fetch the route and calculate the next waypoint
  const fetchRoute = async () => {
    if (!userLocation || !destination) {
      console.log("location", userLocation, "destination", destination);
      alert("Please specify your current location and destination.");
      return;
    }

    console.log("Fetching route for:", userLocation, destination);

    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${userLocation.lng},${userLocation.lat};${destination.lng},${destination.lat}?geometries=geojson`
      );

      const data = await response.json();

      console.log("Route data:", data);

      if (data && data.routes && data.routes.length > 0) {
        const steps = data.routes[0].geometry.coordinates.map(
          ([lng, lat]: [number, number]) => ({
            end_location: { lat, lng },
          })
        );
        renderCompass(steps);
      } else {
        alert("Route not found. Please check your locations.");
      }
    } catch (error) {
      console.error("Error fetching route:", error);
      alert("Failed to fetch route. Please try again.");
    }
  };

  // Select a suggestion and set as destination
  const handleSuggestionClick = (place: suggestionProps) => {
    setDestination({ lat: parseFloat(place.lat), lng: parseFloat(place.lon) });
    setSearchTerm(`${place.display_name}`);
    setSuggestions([]);
  };

  // Render compass arrow
  const renderCompass = (steps: stepProps[]) => {
    console.log(steps, "steppsss");
    const canvas = canvasRef.current;
    if (!canvas || !userLocation || heading === null) return;
    console.log("compass arrow", "steps", steps);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const userLatLng = userLocation;
    const nextStep = steps[0].end_location; // Next waypoint
    const targetBearing = calculateBearing(userLatLng, nextStep); // Bearing to the next waypoint
    const relativeBearing = (targetBearing - heading + 360) % 360; // Relative angle to align arrow

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw arrow
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2); // Center of the screen
    ctx.rotate((relativeBearing * Math.PI) / 180); // Rotate arrow based on relative bearing
    ctx.beginPath();
    ctx.moveTo(0, -50); // Arrow tip
    ctx.lineTo(20, 50); // Arrow right tail
    ctx.lineTo(-20, 50); // Arrow left tail
    ctx.closePath();
    ctx.fillStyle = "rgba(0, 0, 255, 0.7)";
    ctx.fill();
    ctx.restore();
  };

  return (
    <section className="relative w-full h-screen">
      {/* Video Feed */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
      ></video>
      {/*return button*/}
      <Link
        href={"/"}
        className="absolute z-20 top-2 left-2 min-w-max min-h-max rounded-md bg-blue-400"
      >
        <MoveLeft />
      </Link>
      {/* Compass Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full m-auto"
      ></canvas>

      {/* Destination Input */}
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-white/80 p-2 rounded-md flex flex-col gap-3 items-center max-w-max mx-auto">
        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul
            style={{
              marginTop: "5px",
              listStyleType: "none",
              padding: 0,
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "5px",
              maxHeight: "150px",
              overflowY: "auto",
            }}
          >
            {suggestions.map((place) => (
              <li
                key={place.place_id}
                onClick={() => handleSuggestionClick(place)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {place.display_name}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter destination (e.g., Lagos, Abuja)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // value={placeInput}
            // onChange={(e) => setPlaceInput(e.target.value)}
            style={{
              padding: "10px",
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />

          <button
            onClick={() => geocodeDestination(searchTerm)}
            className="p-2 bg-blue-500 text-white cursor-pointer rounded-sm"
          >
            Set
          </button>
          <button
            onClick={fetchRoute}
            className="p-2 bg-slate-500 rounded-sm cursor-pointer"
          >
            Go
          </button>
        </div>
      </div>
    </section>
  );
};

export default ARMapCompass;

// Calculate the bearing between two points
const calculateBearing = (
  start: { lat: number; lng: number },
  end: { lat: number; lng: number }
) => {
  const toRadians = (deg: number) => (deg * Math.PI) / 180;
  const toDegrees = (rad: number) => (rad * 180) / Math.PI;

  const lat1 = toRadians(start.lat);
  const lat2 = toRadians(end.lat);
  const dLng = toRadians(end.lng - start.lng);

  const y = Math.sin(dLng) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);

  return (toDegrees(Math.atan2(y, x)) + 360) % 360; // Normalize to 0-360 degrees
};
