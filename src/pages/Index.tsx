import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import MusicPlayer from "@/components/MusicPlayer";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="h-screen bg-background flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && <Sidebar />}
        <div className="flex-1 flex flex-col">
          <Header />
          <MainContent />
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Index;
