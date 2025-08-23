import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RadioCardProps {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
}

const RadioCard = ({ title, description, image, backgroundColor }: RadioCardProps) => {
  return (
    <div className={`relative p-4 rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 min-w-[200px]`}
         style={{ backgroundColor }}>
      <div className="absolute top-2 left-2">
        <span className="bg-black/20 text-white text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm">
          RADIO
        </span>
      </div>
      
      <div className="mt-8 mb-4">
        <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
      
      <div className="flex items-end justify-between">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <Button
          size="sm"
          className="h-12 w-12 rounded-full bg-black/20 hover:bg-black/40 border-none shadow-lg backdrop-blur-sm"
        >
          <Play className="h-5 w-5 text-white" fill="currentColor" />
        </Button>
      </div>
    </div>
  );
};

export default RadioCard;