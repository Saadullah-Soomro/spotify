import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="w-64 bg-background border-r border-border h-full flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Spotify</h1>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary hover:bg-accent">
          <Home className="mr-3 h-5 w-5" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-accent">
          <Search className="mr-3 h-5 w-5" />
          Search
        </Button>
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-accent">
          <Library className="mr-3 h-5 w-5" />
          Your Library
        </Button>
      </nav>

      {/* Library Section */}
      <div className="mt-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Playlists
          </h2>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-muted-foreground hover:text-primary">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-3">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-accent">
            <Heart className="mr-3 h-4 w-4" />
            Liked Songs
          </Button>
          
          {/* Playlist Items */}
          <div className="space-y-1">
            <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded transition-colors">
              My Playlist #1
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded transition-colors">
              Discover Weekly
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded transition-colors">
              Release Radar
            </button>
            <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded transition-colors">
              Chill Hits
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;