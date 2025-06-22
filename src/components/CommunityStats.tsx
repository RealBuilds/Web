
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, MessageSquare, Star, TrendingUp, Globe } from "lucide-react";

export const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      value: "2,500+",
      label: "Verified Athletes",
      description: "From 45+ sports worldwide",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageSquare,
      value: "15M+",
      label: "Fan Interactions",
      description: "Monthly authentic conversations",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Trophy,
      value: "890",
      label: "Championships",
      description: "Represented by our athletes",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Globe,
      value: "125",
      label: "Countries",
      description: "Global athletic community",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      value: "96%",
      label: "Engagement Rate",
      description: "Higher than traditional platforms",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Platform Rating",
      description: "From athlete community",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            A Thriving Athletic Community
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of athletes who have found their voice and millions of fans who get unprecedented access to their heroes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-lg font-semibold text-slate-700">{stat.label}</div>
                    <div className="text-sm text-slate-600">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join the Elite?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're a professional athlete looking to connect authentically with fans, or a sports enthusiast seeking real stories from your heroes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Apply as Athlete
              </button>
              <button className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Join as Fan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
