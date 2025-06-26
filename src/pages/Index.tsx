import React from "react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Stories } from "@/components/Stories";
import { SportsCategories } from "@/components/SportsCategories";
import { CreatePost } from "@/components/CreatePost";
import { Feed } from "@/components/Feed";
import { TrendingTopics } from "@/components/TrendingTopics";
import { SuggestedAthletes } from "@/components/SuggestedAthletes";
import { StreamingSection } from "@/components/StreamingSection";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Improved Hero Section */}
      <Hero />

      {/* Navigation to Subsections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/streams" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Streams</Link>
          <Link to="/discover" className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition">Discover</Link>
          <Link to="/leaderboard" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition">Leaderboard</Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Live Streaming</CardTitle>
                <CardDescription>Broadcast your games and training sessions in real time to your fans.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80" alt="Live Streaming" className="rounded-lg w-full h-32 object-cover mb-4" />
                <p>Engage with your audience through interactive live streams and Q&A sessions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Verified Community</CardTitle>
                <CardDescription>Only real, verified athletes and fans. No bots, no spam.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Verified Community" className="rounded-lg w-full h-32 object-cover mb-4" />
                <p>Connect with a trusted network of sports professionals and enthusiasts.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Leaderboard & Stats</CardTitle>
                <CardDescription>Track your progress and see how you rank among your peers.</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Leaderboard" className="rounded-lg w-full h-32 object-cover mb-4" />
                <p>Compete for the top spot and celebrate your achievements with the community.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <Avatar className="mb-4 w-16 h-16">
                <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <p className="text-lg font-medium mb-2">"This platform changed the way I connect with my fans!"</p>
              <span className="text-slate-500">Jordan Davis, Pro Footballer</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <Avatar className="mb-4 w-16 h-16">
                <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <p className="text-lg font-medium mb-2">"A safe space for real athletes. Love the live streams!"</p>
              <span className="text-slate-500">Alicia Smith, Olympic Swimmer</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <Avatar className="mb-4 w-16 h-16">
                <AvatarImage src="https://randomuser.me/api/portraits/men/65.jpg" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <p className="text-lg font-medium mb-2">"The leaderboard keeps me motivated to push harder every day."</p>
              <span className="text-slate-500">Ryan Miller, College Basketball</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who can join the platform?</AccordionTrigger>
              <AccordionContent>
                Only verified athletes and approved fans can join. We ensure a safe, authentic community for everyone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I get verified?</AccordionTrigger>
              <AccordionContent>
                Submit your credentials during sign up. Our team will review and verify your status as a professional, collegiate, or retired athlete.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
              <AccordionContent>
                Yes! Our mobile app is coming soon to iOS and Android. Stay tuned for updates.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Main Content and Sidebars (existing) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0 space-y-6 hidden lg:block">
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
          <div className="w-80 flex-shrink-0 hidden xl:block">
            <div className="sticky top-24 space-y-6">
              <StreamingSection />
              <SuggestedAthletes />
              {/* Live Scores Widget (existing) */}
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

      {/* Modern Footer */}
      <Footer />
    </div>
  );
};

export default Index;
