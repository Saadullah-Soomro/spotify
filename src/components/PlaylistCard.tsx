import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
  size?: "small" | "large";
}

const PlaylistCard = ({ title, description, image, size = "small" }: PlaylistCardProps) => {
  const cardSize = size === "large" ? "w-48" : "w-40";
  const imageSize = size === "large" ? "h-48" : "h-40";

  return (
    <div className={`${cardSize} p-4 bg-card hover:bg-accent/50 rounded-lg transition-all duration-300 cursor-pointer group`}>
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className={`${imageSize} w-full object-cover rounded-md shadow-lg`}
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
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;