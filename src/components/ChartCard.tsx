interface ChartCardProps {
  title: string;
  subtitle?: string;
  backgroundColor: string;
  textColor?: string;
  type?: "chart" | "viral";
}

const ChartCard = ({ title, subtitle, backgroundColor, textColor = "text-white", type = "chart" }: ChartCardProps) => {
  return (
    <div 
      className={`p-6 rounded-lg cursor-pointer group transition-all duration-300 hover:scale-105 min-w-[180px] h-[180px] flex flex-col justify-between relative overflow-hidden`}
      style={{ backgroundColor }}
    >
      {/* Icon/Badge */}
      <div className="flex justify-between items-start">
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Content */}
      <div>
        <h3 className={`font-bold text-2xl mb-1 ${textColor}`}>
          {title}
        </h3>
        {subtitle && (
          <p className={`text-sm opacity-80 ${textColor}`}>
            {subtitle}
          </p>
        )}
        <p className={`text-xs opacity-60 mt-2 ${textColor}`}>
          Your daily update of the most played tracks right now
        </p>
      </div>
    </div>
  );
};

export default ChartCard;