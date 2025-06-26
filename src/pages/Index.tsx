import React from "react";
import { Feed } from "@/components/Feed";
import { SuggestedAthletes } from "@/components/SuggestedAthletes";
import { StreamingSection } from "@/components/StreamingSection";
import { TrendingTopics } from "@/components/TrendingTopics";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Feed Content */}
          <main className="flex-1 max-w-2xl mx-auto space-y-6">
            <Feed />
          </main>

          {/* Right Sidebar */}
          <aside className="w-80 flex-shrink-0 hidden xl:block space-y-6 pt-8">
            <div className="sticky top-24 space-y-6">
              <StreamingSection />
              <SuggestedAthletes />
              <TrendingTopics />
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
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Index;
