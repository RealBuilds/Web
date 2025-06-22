
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

export const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const stories = [
    {
      id: 1,
      athlete: "You",
      avatar: null,
      isOwn: true
    },
    {
      id: 2,
      athlete: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      hasNewStory: true
    },
    {
      id: 3,
      athlete: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      hasNewStory: true
    },
    {
      id: 4,
      athlete: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
      hasNewStory: false
    },
    {
      id: 5,
      athlete: "David Park",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      hasNewStory: true
    },
    {
      id: 6,
      athlete: "Carlos Martinez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      hasNewStory: false
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900">Stories</h3>
        <div className="flex space-x-2">
          <button className="p-1 rounded-full hover:bg-slate-100">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-1 rounded-full hover:bg-slate-100">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0 text-center cursor-pointer group">
            <div className="relative">
              {story.isOwn ? (
                <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center border-2 border-transparent">
                  <Plus className="w-6 h-6 text-slate-600" />
                </div>
              ) : (
                <div className={`w-16 h-16 rounded-full p-0.5 ${story.hasNewStory ? 'bg-gradient-to-tr from-pink-500 to-orange-500' : 'bg-slate-300'}`}>
                  <img 
                    src={story.avatar} 
                    alt={story.athlete}
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
              )}
            </div>
            <p className="text-xs text-slate-600 mt-2 max-w-[64px] truncate">
              {story.athlete}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
