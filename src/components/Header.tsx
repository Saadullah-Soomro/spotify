import { Search, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Navigation Buttons */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full bg-secondary">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full bg-secondary">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for songs, artists, or albums"
            className="pl-10 bg-secondary border-0 focus:ring-1 focus:ring-primary rounded-full"
          />
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="text-sm font-medium hover:bg-accent">
          Premium
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full bg-secondary">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;