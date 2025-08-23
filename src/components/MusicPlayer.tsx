import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
      <div className="flex items-center justify-between">
        {/* Current Song Info */}
        <div className="flex items-center space-x-3 w-1/4">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop&crop=center"
            alt="Current song"
            className="w-14 h-14 rounded object-cover"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium truncate">Blinding Lights</p>
            <p className="text-xs text-muted-foreground truncate">The Weeknd</p>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-primary">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 w-2/4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground">
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button size="sm" className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90">
              <Play className="h-5 w-5" fill="currentColor" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground">
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full max-w-md">
            <span className="text-xs text-muted-foreground">1:23</span>
            <Slider
              value={[40]}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">3:45</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center space-x-2 w-1/4 justify-end">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={[75]}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;