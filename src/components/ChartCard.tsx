import { useIsMobile } from "@/hooks/use-mobile";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  backgroundColor: string;
  textColor?: string;
  type?: "chart" | "viral";
}

const ChartCard = ({ title, subtitle, backgroundColor, textColor = "text-white", type = "chart" }: ChartCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={`${isMobile ? 'p-4' : 'p-6'} rounded-lg cursor-pointer group transition-all duration-300 hover:scale-105 ${isMobile ? 'min-w-[140px] w-[140px] h-[140px]' : 'min-w-[180px] h-[180px]'} flex flex-col justify-between relative overflow-hidden`}
      style={{ backgroundColor }}
    >
      {/* Icon/Badge */}
      <div className="flex justify-between items-start">
        <div className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} bg-white/20 rounded-full flex items-center justify-center`}>
          <div className={`${isMobile ? 'w-2 h-2' : 'w-3 h-3'} bg-white rounded-full`}></div>
        </div>
      </div>
      
      {/* Content */}
      <div>
        <h3 className={`font-bold ${isMobile ? 'text-lg' : 'text-2xl'} mb-1 ${textColor}`}>
          {title}
        </h3>
        {subtitle && (
          <p className={`${isMobile ? 'text-xs' : 'text-sm'} opacity-80 ${textColor}`}>
            {subtitle}
          </p>
        )}
        <p className={`text-xs opacity-60 mt-2 ${textColor} ${isMobile ? 'line-clamp-2' : ''}`}>
          Your daily update of the most played tracks right now
        </p>
      </div>
    </div>
  );
};

export default ChartCard;