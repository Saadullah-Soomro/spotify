import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface SongCardProps {
  title: string;
  artist: string;
  image: string;
}

const SongCard = ({ title, artist, image }: SongCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`group cursor-pointer ${isMobile ? 'min-w-[140px] w-[140px]' : 'min-w-[180px]'}`}>
      <div className="relative mb-3">
        <img
          src={image}
          alt={title}
          className={`w-full ${isMobile ? 'h-[140px]' : 'h-[180px]'} object-cover rounded-lg shadow-lg`}
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
        <p className="text-xs text-muted-foreground truncate">{artist}</p>
      </div>
    </div>
  );
};

export default SongCard;