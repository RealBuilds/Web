
import { TrendingUp, Hash } from "lucide-react";

export const TrendingTopics = () => {
  const topics = [
    { tag: "OlympicPrep", posts: "12.4K posts" },
    { tag: "TrainingTuesday", posts: "8.7K posts" },
    { tag: "RecoveryDay", posts: "5.2K posts" },
    { tag: "GameDayReady", posts: "3.9K posts" },
    { tag: "MentalHealth", posts: "2.1K posts" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Trending Topics</h3>
      </div>
      
      <div className="space-y-3">
        {topics.map((topic, index) => (
          <div key={topic.tag} className="flex items-center justify-between py-2 hover:bg-slate-50 rounded-lg px-2 cursor-pointer transition-colors">
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 font-medium">#{index + 1}</span>
              <Hash className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-slate-900 hover:text-blue-600">
                {topic.tag}
              </span>
            </div>
            <span className="text-xs text-slate-500">{topic.posts}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
