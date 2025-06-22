
import { Heart, MessageCircle, Share2, CheckCircle, MoreHorizontal, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Feed = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);

  const posts = [
    {
      id: 1,
      athlete: "Sarah Chen",
      sport: "Swimming",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Just finished an incredible morning session in the pool! The water felt perfect today and I managed to shave 0.3 seconds off my personal best in the 200m freestyle. Sometimes the smallest improvements feel like the biggest victories. 🏊‍♀️💪",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 2847,
      comments: 156,
      shares: 23,
      timeAgo: "2h ago",
      location: "Olympic Training Center"
    },
    {
      id: 2,
      athlete: "Marcus Johnson",
      sport: "NFL",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Recovery day wisdom: Your body grows stronger during rest, not just during training. Taking today to focus on mobility, nutrition, and mental preparation. The grind never stops, it just changes form. 🧠💯",
      likes: 4321,
      comments: 298,
      shares: 67,
      timeAgo: "4h ago"
    },
    {
      id: 3,
      athlete: "Elena Rodriguez",
      sport: "Tennis",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
      content: "The court taught me something beautiful today - every point is a new beginning. You can lose 15 points in a row and still win the match. Sport mirrors life in the most incredible ways. Never give up on yourself. 🎾✨",
      image: "https://images.unsplash.com/photo-1544717684-4545f6fdcc20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      likes: 1892,
      comments: 134,
      shares: 89,
      timeAgo: "6h ago",
      location: "Roland Garros"
    }
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleSave = (postId: number) => {
    setSavedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-sm border animate-fade-in">
          {/* Post Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="flex items-center space-x-3">
              <img 
                src={post.avatar} 
                alt={post.athlete}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-slate-900 hover:underline cursor-pointer">{post.athlete}</h3>
                  {post.verified && (
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  )}
                  <Badge variant="secondary" className="text-xs">
                    {post.sport}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <span>{post.timeAgo}</span>
                  {post.location && (
                    <>
                      <span>•</span>
                      <span>{post.location}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>

          {/* Post Content */}
          <div className="px-6 pb-4">
            <p className="text-slate-700 text-base leading-relaxed">{post.content}</p>
          </div>

          {/* Post Image */}
          {post.image && (
            <div className="px-6 pb-4">
              <img 
                src={post.image} 
                alt="Post content"
                className="w-full rounded-lg object-cover max-h-96 cursor-pointer hover:opacity-95 transition-opacity"
              />
            </div>
          )}

          {/* Engagement Stats */}
          <div className="px-6 py-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>{post.likes.toLocaleString()} likes</span>
              <div className="flex space-x-4">
                <span>{post.comments} comments</span>
                <span>{post.shares} shares</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-3 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center space-x-2 transition-colors group ${
                    likedPosts.includes(post.id) ? 'text-red-500' : 'text-slate-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 group-hover:scale-110 transition-transform ${
                    likedPosts.includes(post.id) ? 'fill-current' : ''
                  }`} />
                  <span className="font-medium">Like</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-600 hover:text-blue-500 transition-colors group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Comment</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-600 hover:text-green-500 transition-colors group">
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Share</span>
                </button>
              </div>
              <button 
                onClick={() => toggleSave(post.id)}
                className={`transition-colors ${
                  savedPosts.includes(post.id) ? 'text-yellow-500' : 'text-slate-600 hover:text-yellow-500'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${savedPosts.includes(post.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
