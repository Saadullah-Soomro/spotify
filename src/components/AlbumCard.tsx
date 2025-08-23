import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlbumCardProps {
  title: string;
  artist: string;
  image: string;
}

const AlbumCard = ({ title, artist, image }: AlbumCardProps) => {
  return (
    <div className="group cursor-pointer min-w-[180px]">
      <div className="relative mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-[180px] object-cover rounded-lg shadow-lg"
        />
        <Button
          size="sm"
          className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-primary hover:bg-primary/90 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          <Play className="h-4 w-4" fill="currentColor" />
        </Button>
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-1 truncate">{title}</h3>
        <p className="text-xs text-muted-foreground truncate">{artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard;