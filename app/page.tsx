"use client";

import TechWordOfTheDay from "@/components/TechWordOfTheDay";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-7xl text-white font-bold mb-10">
        Tech Word of the Day
      </h1>
      <TechWordOfTheDay />
    </div>
  );
}
