
import { useState } from "react";
import { Header } from "@/components/Header";
import { Stories } from "@/components/Stories";
import { CreatePost } from "@/components/CreatePost";
import { Feed } from "@/components/Feed";
import { TrendingTopics } from "@/components/TrendingTopics";
import { SuggestedAthletes } from "@/components/SuggestedAthletes";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <TrendingTopics />
              <SuggestedAthletes />
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-6 space-y-6">
            <Stories />
            <CreatePost />
            <Feed />
          </div>

          {/* Right Sidebar - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Live Sports Updates</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium">NBA Finals Game 4</div>
                    <div className="text-slate-600">Lakers 108 - Celtics 102</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">UEFA Champions League</div>
                    <div className="text-slate-600">Barcelona vs PSG - 8:00 PM</div>
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
