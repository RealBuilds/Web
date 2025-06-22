
import { UserPlus, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const SuggestedAthletes = () => {
  const athletes = [
    {
      name: "Maya Thompson",
      sport: "Track & Field",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face",
      followers: "892K",
      verified: true
    },
    {
      name: "Jake Wilson",
      sport: "Basketball",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      followers: "1.2M",
      verified: true
    },
    {
      name: "Sofia Garcia", 
      sport: "Soccer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
      followers: "567K",
      verified: true
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center space-x-2 mb-4">
        <UserPlus className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-slate-900">Suggested Athletes</h3>
      </div>
      
      <div className="space-y-4">
        {athletes.map((athlete) => (
          <div key={athlete.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={athlete.avatar} 
                alt={athlete.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-medium text-slate-900 text-sm hover:underline cursor-pointer">
                    {athlete.name}
                  </span>
                  {athlete.verified && (
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    {athlete.sport}
                  </Badge>
                  <span className="text-xs text-slate-500">{athlete.followers}</span>
                </div>
              </div>
            </div>
            <Button size="sm" variant="outline" className="text-xs">
              Follow
            </Button>
          </div>
        ))}
      </div>
      
      <Button variant="ghost" className="w-full mt-4 text-blue-600 hover:bg-blue-50">
        See all suggestions
      </Button>
    </div>
  );
};
