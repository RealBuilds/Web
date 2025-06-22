
import { Trophy, Zap, Target, Crown, Star, Medal } from "lucide-react";

export const SportsCategories = () => {
  const categories = [
    { 
      name: "Football", 
      icon: Trophy, 
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      athletes: 1247,
      posts: "15.2K"
    },
    { 
      name: "Basketball", 
      icon: Zap, 
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      athletes: 892,
      posts: "12.8K"
    },
    { 
      name: "Baseball", 
      icon: Target, 
      color: "bg-gradient-to-r from-teal-500 to-green-500",
      textColor: "text-teal-600",
      bgColor: "bg-teal-50",
      athletes: 634,
      posts: "8.9K"
    },
    { 
      name: "Soccer", 
      icon: Crown, 
      color: "bg-gradient-to-r from-indigo-500 to-blue-500",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      athletes: 1156,
      posts: "18.7K"
    },
    { 
      name: "Tennis", 
      icon: Star, 
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      athletes: 423,
      posts: "5.4K"
    },
    { 
      name: "Olympic", 
      icon: Medal, 
      color: "bg-gradient-to-r from-rose-500 to-pink-500",
      textColor: "text-rose-600",
      bgColor: "bg-rose-50",
      athletes: 789,
      posts: "9.1K"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <h3 className="font-semibold text-slate-900 mb-4">Sports Categories</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className={`${category.bgColor} rounded-lg p-4 cursor-pointer hover:scale-105 transition-all duration-200 group`}
          >
            <div className="text-center">
              <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className={`font-semibold ${category.textColor} text-sm mb-1`}>
                {category.name}
              </h4>
              <div className="text-xs text-slate-500 space-y-1">
                <div>{category.athletes.toLocaleString()} athletes</div>
                <div>{category.posts} posts</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
