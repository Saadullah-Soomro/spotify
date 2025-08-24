import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const SidebarContent = ({ onClose }: { onClose?: () => void }) => (
  <div className="h-full flex flex-col bg-background">
    {/* Logo */}
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary">Spotify</h1>
    </div>

    {/* Main Navigation */}
    <nav className="px-4 space-y-2">
      <Button 
        variant="ghost" 
        className="w-full justify-start text-foreground hover:text-primary hover:bg-accent"
        onClick={onClose}
      >
        <Home className="mr-3 h-5 w-5" />
        Home
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-accent"
        onClick={onClose}
      >
        <Search className="mr-3 h-5 w-5" />
        Search
      </Button>
      <Button 
        variant="ghost" 
        className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-accent"
        onClick={onClose}
      >
        <Library className="mr-3 h-5 w-5" />
        Your Library
      </Button>
    </nav>

    {/* Library Section */}
    <div className="mt-8 px-4 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Playlists
        </h2>
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-muted-foreground hover:text-primary">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-3">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-accent"
          onClick={onClose}
        >
          <Heart className="mr-3 h-4 w-4" />
          Liked Songs
        </Button>
        
        {/* Playlist Items */}
        <div className="space-y-1">
          <button 
            className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded transition-colors"
            onClick={onClose}
          >
            My Playlist #1
          </button>
          <button 
            className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded transition-colors"
            onClick={onClose}
          >
            Discover Weekly
          </button>
          <button 
            className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded transition-colors"
            onClick={onClose}
          >
            Release Radar
          </button>
          <button 
            className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded transition-colors"
            onClick={onClose}
          >
            Chill Hits
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  if (isMobile) {
    return (
      <Sheet open={isOpen || isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="left" className="p-0 w-[280px]">
          <SidebarContent onClose={() => {
            setIsSheetOpen(false);
            onClose?.();
          }} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="w-64 bg-background border-r border-border h-full">
      <SidebarContent />
    </div>
  );
};

export const SidebarTrigger = ({ children, ...props }: React.ComponentProps<typeof SheetTrigger>) => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <Sheet>
      <SheetTrigger {...props}>
        {children}
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-[280px]">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
