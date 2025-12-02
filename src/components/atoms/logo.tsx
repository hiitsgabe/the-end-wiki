import React from "react";
import { cn } from "@/lib/utils";
import { ColourfulText } from "@/components/ui";

function Logo({ className }: { className?: string }) {
  return <h1 className={cn("text-2xl font-bold my-2", className)}><span className="border-b-4 border-pink-500">The End</span> <ColourfulText text="Wiki" interval={3000}
    animationDuration={0.7}
    colors={["#ff0080", "#00ffff", "#00ff00", "#0080ff", "#ffff00", "#ff00ff", "#ff6600", "#00ff80"]} /></h1>;
}

export default Logo;
