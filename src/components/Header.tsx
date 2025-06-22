
import { useState } from "react";
import { Menu, X, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AP</span>
            </div>
            <span className="text-xl font-bold text-slate-900">AthletePost</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Feed</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Athletes</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Sports</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Stories</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Join Platform
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium py-2">Feed</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium py-2">Athletes</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium py-2">Sports</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium py-2">Stories</a>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 mt-4">
                Join Platform
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
