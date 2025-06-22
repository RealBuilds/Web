
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Trophy, Users, TrendingUp } from "lucide-react";

export const AthleteSpotlight = () => {
  const athletes = [
    {
      name: "Sarah Chen",
      sport: "Swimming",
      achievement: "3x Olympic Gold Medalist",
      followers: "1.2M",
      engagement: "98%",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      recentPost: "Training update from Tokyo - the pool feels like home again..."
    },
    {
      name: "Carlos Martinez",
      sport: "Soccer",
      achievement: "Premier League Champion",
      followers: "890K",
      engagement: "94%",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      recentPost: "The beautiful game taught me everything about teamwork and perseverance..."
    },
    {
      name: "Maya Thompson",
      sport: "Track & Field",
      achievement: "World Record Holder",
      followers: "2.1M",
      engagement: "96%",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&crop=face",
      coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      recentPost: "Breaking barriers starts with believing you can. Every step counts..."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Athletes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the champions who are redefining how athletes connect with their communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {athletes.map((athlete, index) => (
            <Card key={athlete.name} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative">
                <img 
                  src={athlete.coverImage} 
                  alt={`${athlete.name} cover`}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute -bottom-6 left-6">
                  <div className="relative">
                    <img 
                      src={athlete.avatar} 
                      alt={athlete.name}
                      className="w-16 h-16 rounded-full border-4 border-white object-cover"
                    />
                    <CheckCircle className="absolute -bottom-1 -right-1 w-6 h-6 text-blue-500 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              
              <CardContent className="pt-8 p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{athlete.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary">{athlete.sport}</Badge>
                      <Trophy className="w-4 h-4 text-yellow-500" />
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{athlete.achievement}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Users className="w-4 h-4 text-slate-500" />
                        <span className="font-semibold text-slate-900">{athlete.followers}</span>
                      </div>
                      <div className="text-xs text-slate-600">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="font-semibold text-slate-900">{athlete.engagement}</span>
                      </div>
                      <div className="text-xs text-slate-600">Engagement</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-sm text-slate-700 italic">"{athlete.recentPost}"</p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
