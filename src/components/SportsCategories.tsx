
import { Trophy, Zap, Target, Crown, Star, Medal, ChevronRight } from "lucide-react";

export const SportsCategories = () => {
  const categories = [
    { 
      name: "Football", 
      icon: Trophy, 
      athletes: 1247,
      posts: "15.2K"
    },
    { 
      name: "Basketball", 
      icon: Zap, 
      athletes: 892,
      posts: "12.8K"
    },
    { 
      name: "Baseball", 
      icon: Target, 
      athletes: 634,
      posts: "8.9K"
    },
    { 
      name: "Soccer", 
      icon: Crown, 
      athletes: 1156,
      posts: "18.7K"
    },
    { 
      name: "Tennis", 
      icon: Star, 
      athletes: 423,
      posts: "5.4K"
    },
    { 
      name: "Olympic", 
      icon: Medal, 
      athletes: 789,
      posts: "9.1K"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      <h3 className="font-bold text-slate-900 mb-4">Sports Categories</h3>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <category.icon className="w-4 h-4 text-slate-600" />
              </div>
              <div>
                <div className="font-medium text-slate-900 text-sm">{category.name}</div>
                <div className="text-xs text-slate-500">{category.athletes.toLocaleString()} athletes</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};
