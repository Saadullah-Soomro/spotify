interface ArtistCardProps {
  name: string;
  image: string;
  type?: string;
}

const ArtistCard = ({ name, image, type = "Artist" }: ArtistCardProps) => {
  return (
    <div className="group cursor-pointer text-center min-w-[140px]">
      <div className="relative mb-3">
        <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-lg mx-auto">
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