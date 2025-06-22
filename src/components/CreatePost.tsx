
import { Image, Video, Trophy, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const CreatePost = () => {
  const [postContent, setPostContent] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      {/* Header */}
      <div className="p-6 border-b border-slate-100">
        <h3 className="font-bold text-slate-900 flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
          Share Your Victory
        </h3>
      </div>
      
      <div className="p-6">
        <div className="flex space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
            alt="Your avatar"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div className="flex-1 space-y-4">
            <Textarea
              placeholder="What milestone did you achieve today? Share your training insights, game highlights, or motivation with fellow athletes..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="min-h-[120px] border-0 resize-none focus:ring-0 text-base placeholder:text-slate-500 bg-slate-50 rounded-xl"
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 rounded-xl px-4">
                  <Image className="w-4 h-4 mr-2" />
                  Media
                </Button>
                <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50 rounded-xl px-4">
                  <Video className="w-4 h-4 mr-2" />
                  Video
                </Button>
                <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50 rounded-xl px-4">
                  <Users className="w-4 h-4 mr-2" />
                  Tag Team
                </Button>
                <Button variant="ghost" size="sm" className="text-orange-600 hover:bg-orange-50 rounded-xl px-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location
                </Button>
              </div>
              
              <Button 
                className="bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700 rounded-xl px-6"
                disabled={!postContent.trim()}
              >
                Post Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
