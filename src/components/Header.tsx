
import { useState } from "react";
import { Menu, X, Search, Bell, MessageCircle, Trophy, Target, Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white border-b-2 border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-900">AthleteArena</span>
              <div className="text-xs text-slate-500 font-medium">FOR CHAMPIONS</div>
            </div>
          </div>

          {/* Navigation Tabs - Desktop */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100 rounded-full p-1">
            <Button variant="ghost" size="sm" className="rounded-full bg-white shadow-sm px-6">
              <Target className="w-4 h-4 mr-2" />
              Feed
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full px-6 text-slate-600">
              <Play className="w-4 h-4 mr-2 text-red-500" />
              Streams
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full px-6 text-slate-600">
              <Zap className="w-4 h-4 mr-2" />
              Discover
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full px-6 text-slate-600">
              <Trophy className="w-4 h-4 mr-2" />
              Leaderboard
            </Button>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search athletes, teams, or sports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all text-sm"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative p-3 rounded-full hover:bg-slate-100">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
            </Button>
            <Button variant="ghost" size="sm" className="relative p-3 rounded-full hover:bg-slate-100">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-xs text-white flex items-center justify-center">7</span>
            </Button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <span className="text-white font-semibold text-sm">JD</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 animate-fade-in">
            <div className="space-y-4">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>
              <div className="space-y-2">
                <a href="#" className="flex items-center space-x-3 text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50">
                  <Target className="w-5 h-5" />
                  <span>Feed</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50">
                  <Play className="w-5 h-5 text-red-500" />
                  <span>Streams</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50">
                  <Zap className="w-5 h-5" />
                  <span>Discover</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-lg hover:bg-slate-50">
                  <Trophy className="w-5 h-5" />
                  <span>Leaderboard</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
