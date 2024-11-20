"use client";
import React from "react";
import { useParams } from "next/navigation";

const SettingsPage = () => {
  const params = useParams();
  const path = params.app;

  switch (path) {
    case "survelliance":
      return <>survelliance</>;

    case "alert":
      return <>alert</>;

    case "profile":
      return <>profile</>;

    case "community":
      return <>Community</>;

    default:
      break;
  }
};

export default SettingsPage;
