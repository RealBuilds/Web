
import { Image, Video, Smile, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const CreatePost = () => {
  const [postContent, setPostContent] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex space-x-4">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
          alt="Your avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 space-y-4">
          <Textarea
            placeholder="What's happening in your training today?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="min-h-[100px] border-none resize-none focus:ring-0 text-lg placeholder:text-slate-500"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-orange-600 hover:bg-orange-50">
                <Image className="w-5 h-5 mr-2" />
                Photo
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                <Video className="w-5 h-5 mr-2" />
                Video
              </Button>
              <Button variant="ghost" size="sm" className="text-yellow-600 hover:bg-yellow-50">
                <Smile className="w-5 h-5 mr-2" />
                Feeling
              </Button>
              <Button variant="ghost" size="sm" className="text-teal-600 hover:bg-teal-50">
                <MapPin className="w-5 h-5 mr-2" />
                Location
              </Button>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700"
              disabled={!postContent.trim()}
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
