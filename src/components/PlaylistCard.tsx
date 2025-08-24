import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
  size?: "small" | "large";
}

const PlaylistCard = ({ title, description, image, size = "small" }: PlaylistCardProps) => {
  const isMobile = useIsMobile();
  
  const getCardSize = () => {
    if (isMobile) return "w-32";
    return size === "large" ? "w-48" : "w-40";
  };
  
  const getImageSize = () => {
    if (isMobile) return "h-32";
    return size === "large" ? "h-48" : "h-40";
  };

  return (
    <div className={`${getCardSize()} ${isMobile ? 'p-3' : 'p-4'} bg-card hover:bg-accent/50 rounded-lg transition-all duration-300 cursor-pointer group`}>
      <div className="relative mb-3">
        <img
          src={image}
          alt={title}
          className={`${getImageSize()} w-full object-cover rounded-md shadow-lg`}
        />
        <Button
          size="sm"
          className={`absolute bottom-2 right-2 ${isMobile ? 'h-8 w-8' : 'h-10 w-10'} rounded-full bg-primary hover:bg-primary/90 shadow-lg ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0'} transition-all duration-300`}
        >
          <Play className={`${isMobile ? 'h-3 w-3' : 'h-4 w-4'}`} fill="currentColor" />
        </Button>
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-1 truncate">{title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;