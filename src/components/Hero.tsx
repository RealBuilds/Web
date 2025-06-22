
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-green-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified Athletes Only
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Where Athletes
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Own </span>
                Their Story
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                The exclusive platform for professional, collegiate, and retired athletes to share authentic perspectives and connect directly with their fans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3">
                Request Access
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 group">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">2,500+</div>
                <div className="text-sm text-slate-600">Verified Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">15M+</div>
                <div className="text-sm text-slate-600">Fan Interactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">45+</div>
                <div className="text-sm text-slate-600">Sports Covered</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Athletes in action"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Sarah Chen</div>
                    <div className="text-xs text-slate-600">Olympic Swimmer</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-fade-in">
                <div className="text-sm font-medium text-slate-900">Latest Post</div>
                <div className="text-xs text-slate-600 mt-1">"Training for Paris 2024..."</div>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="text-xs text-slate-500">2.3k likes</span>
                  <span className="text-xs text-slate-500">186 comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
