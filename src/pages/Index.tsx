
import { useState } from "react";
import { Header } from "@/components/Header";
import { Stories } from "@/components/Stories";
import { SportsCategories } from "@/components/SportsCategories";
import { CreatePost } from "@/components/CreatePost";
import { Feed } from "@/components/Feed";
import { TrendingTopics } from "@/components/TrendingTopics";
import { SuggestedAthletes } from "@/components/SuggestedAthletes";
import { StreamingSection } from "@/components/StreamingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">The Athlete's Arena</h1>
            <p className="text-slate-300 text-lg">Where champions share their journey & stream live</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0 space-y-6">
            <SportsCategories />
            <Stories />
            <TrendingTopics />
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <CreatePost />
            <Feed />
          </div>

          {/* Right Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <StreamingSection />
              <SuggestedAthletes />
              
              {/* Live Scores Widget */}
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Live Scores</h3>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <div className="text-sm">
                      <div className="font-semibold">Lakers vs Warriors</div>
                      <div className="text-slate-500">Q4 - 2:45</div>
                    </div>
                    <div className="text-right text-sm font-bold">
                      <div>108</div>
                      <div>102</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div className="text-sm">
                      <div className="font-semibold">Chiefs vs Bills</div>
                      <div className="text-slate-500">Final</div>
                    </div>
                    <div className="text-right text-sm font-bold">
                      <div>24</div>
                      <div>21</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
