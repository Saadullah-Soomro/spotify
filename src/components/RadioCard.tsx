import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface RadioCardProps {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
}

const RadioCard = ({ title, description, image, backgroundColor }: RadioCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`relative ${isMobile ? 'p-3' : 'p-4'} rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 ${isMobile ? 'min-w-[160px] w-[160px]' : 'min-w-[200px]'}`}
         style={{ backgroundColor }}>
      <div className="absolute top-2 left-2">
        <span className={`bg-black/20 text-white ${isMobile ? 'text-xs px-2 py-1' : 'text-xs px-2 py-1'} rounded-full font-medium backdrop-blur-sm`}>
          RADIO
        </span>
      </div>
      
      <div className={`${isMobile ? 'mt-6 mb-3' : 'mt-8 mb-4'}`}>
        <h3 className={`text-white font-bold ${isMobile ? 'text-lg' : 'text-xl'} mb-1`}>{title}</h3>
        <p className={`text-white/80 ${isMobile ? 'text-xs' : 'text-sm'} ${isMobile ? 'line-clamp-2' : ''}`}>{description}</p>
      </div>
      
      <div className="flex items-end justify-between">
        <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-full overflow-hidden border-2 border-white/20`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <Button
          size="sm"
          className={`${isMobile ? 'h-10 w-10' : 'h-12 w-12'} rounded-full bg-black/20 hover:bg-black/40 border-none shadow-lg backdrop-blur-sm`}
        >
          <Play className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} text-white`} fill="currentColor" />
        </Button>
      </div>
    </div>
  );
};

export default RadioCard;