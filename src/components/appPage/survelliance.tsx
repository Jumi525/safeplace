import { useToast } from "@/hooks/use-toast";
import React from "react";
import { Button } from "../ui/button";

const Survelliance = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
      }}
    >
      Show Toast
    </Button>
  );
};

export default Survelliance;
