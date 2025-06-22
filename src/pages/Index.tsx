
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedContent } from "@/components/FeaturedContent";
import { AthleteSpotlight } from "@/components/AthleteSpotlight";
import { CommunityStats } from "@/components/CommunityStats";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <FeaturedContent />
      <AthleteSpotlight />
      <CommunityStats />
      <Footer />
    </div>
  );
};

export default Index;
