import { useIsMobile } from "@/hooks/use-mobile";

interface ArtistCardProps {
  name: string;
  image: string;
  type?: string;
}

const ArtistCard = ({ name, image, type = "Artist" }: ArtistCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`group cursor-pointer text-center ${isMobile ? 'min-w-[120px] w-[120px]' : 'min-w-[140px]'}`}>
      <div className="relative mb-3">
        <div className={`${isMobile ? 'w-[120px] h-[120px]' : 'w-[140px] h-[140px]'} rounded-full overflow-hidden shadow-lg mx-auto`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-1 truncate">{name}</h3>
        <p className="text-xs text-muted-foreground">{type}</p>
      </div>
    </div>
  );
};

export default ArtistCard;