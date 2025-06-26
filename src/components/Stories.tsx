import { ChevronLeft, ChevronRight, Plus, Play } from "lucide-react";
import { useState } from "react";

export const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const stories = [
    {
      id: 1,
      athlete: "Add Story",
      avatar: null,
      isOwn: true
    },
    {
      id: 2,
      athlete: "Ral Nwogbo",
      avatar: "/profile-sofia-garcia.jpg",
      hasNewStory: true,
      storyType: "training"
    },
    {
      id: 3,
      athlete: "Cory Williams",
      avatar: "/profile-cory-williams.jpg",
      hasNewStory: true,
      storyType: "game"
    },
    {
      id: 4,
      athlete: "Hollis Robertson",
      avatar: "/profile-hollis-robertson.jpg",
      hasNewStory: false,
      storyType: "recovery"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-900">Training Stories</h3>
        <div className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
          Live Updates
        </div>
      </div>
      
      <div className="space-y-3">
        {stories.map((story) => (
          <div key={story.id} className="flex items-center space-x-3 cursor-pointer group hover:bg-slate-50 rounded-lg p-2 -mx-2">
            <div className="relative flex-shrink-0">
              {story.isOwn ? (
                <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center border-2 border-slate-200">
                  <Plus className="w-5 h-5 text-slate-600" />
                </div>
              ) : (
                <div className={`w-12 h-12 rounded-xl p-0.5 ${story.hasNewStory ? 'bg-gradient-to-tr from-blue-500 to-purple-500' : 'bg-slate-300'}`}>
                  <img 
                    src={story.avatar} 
                    alt={story.athlete}
                    className="w-full h-full rounded-lg object-cover"
                  />
                  {story.hasNewStory && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Play className="w-3 h-3 text-blue-500 fill-current" />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                {story.athlete}
              </p>
              {!story.isOwn && (
                <p className="text-xs text-slate-500 capitalize">
                  {story.storyType} session
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
