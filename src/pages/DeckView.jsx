import React from "react";
import { mallData } from "../config/mallData";

import CinematicIntro from "../components/deck/CinematicIntro";
import PropertyOverview from "../components/deck/PropertyOverview";
import RetailLuxury from "../components/deck/RetailLuxury";
import DiningEntertainment from "../components/deck/DiningEntertainment";
import EventsPlatform from "../components/deck/EventsPlatform";

export default function DeckView() {
  return (
    <main className="bg-black text-white min-h-screen font-body selection:bg-white selection:text-black">
      {/* 1. Cinematic Intro */}
      <CinematicIntro mallData={mallData} />

      {/* 2. Why This Property */}
      <PropertyOverview mallData={mallData} />
      
      {/* 3. Retail & Luxury Modules */}
      <RetailLuxury mallData={mallData} />

      {/* 4 & 5. Dining & Lifestyle + Attractions & Entertainment */}
      <DiningEntertainment mallData={mallData} />

      {/* 6. Events & Platform */}
      <EventsPlatform mallData={mallData} />

    </main>
  );
}
