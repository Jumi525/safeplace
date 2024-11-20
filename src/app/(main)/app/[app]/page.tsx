"use client";
import React from "react";
import { useParams } from "next/navigation";
import Survelliance from "@/components/appPage/survelliance";
import Alert from "@/components/appPage/alert";
import Profile from "@/components/appPage/profile";
import Community from "@/components/appPage/community";

const SettingsPage = () => {
  const params = useParams();
  const path = params.app;

  switch (path) {
    case "survelliance":
      return <Survelliance />;

    case "alert":
      return <Alert />;

    case "profile":
      return <Profile />;

    case "community":
      return <Community />;

    default:
      break;
  }
};

export default SettingsPage;
