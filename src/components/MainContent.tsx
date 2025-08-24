import PlaylistCard from "./PlaylistCard";
import RadioCard from "./RadioCard";
import ChartCard from "./ChartCard";
import SongCard from "./SongCard";
import ArtistCard from "./ArtistCard";
import AlbumCard from "./AlbumCard";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const MainContent = () => {
  const popularRadio = [
    {
      title: "Arijit Singh",
      description: "With Sachin-Jigar, Jeet Gannguli, Sachet Tandon and more",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#FFA726"
    },
    {
      title: "Shubh",
      description: "With Karan Aujla, AP Dhillon, Cheema Y and more",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#E91E63"
    },
    {
      title: "Talwiinder",
      description: "With AP Dhillon, Karan Aujla, Diljit Dosanjh and more",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#26C6DA"
    },
    {
      title: "Diljit Dosanjh",
      description: "With Shubh, Karan Aujla, Sidhu Moose Wala and more",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#66BB6A"
    },
    {
      title: "Sidhu Moose Wala",
      description: "With AP Dhillon, Wazir Patar, JERRY and more",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#AB47BC"
    },
    {
      title: "Talha Anjum",
      description: "With Young Stunners, Talhah Yunus, Umair and more",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#FF7043"
    },
    {
      title: "AR Rahman",
      description: "With Ilaiyaraaja, Harris Jayaraj, Anirudh and more",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#42A5F5"
    },
    {
      title: "Rahat Fateh Ali Khan",
      description: "With Nusrat Fateh Ali Khan, Abida Parveen, Fareed Ayaz and more",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#8BC34A"
    },
    {
      title: "Karan Aujla",
      description: "With AP Dhillon, Shubh, Divine and more",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#FF5722"
    },
    {
      title: "Atif Aslam",
      description: "With Rahat Fateh Ali Khan, Shafqat Amanat Ali and more",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=center",
      backgroundColor: "#9C27B0"
    }
  ];

  const featuredCharts = [
    { title: "Top Songs", subtitle: "Global", backgroundColor: "#8E24AA", type: "chart" },
    { title: "Top Songs", subtitle: "Pakistan", backgroundColor: "#3F51B5", type: "chart" },
    { title: "Top 50", subtitle: "Global", backgroundColor: "#00897B", type: "chart" },
    { title: "Top 50", subtitle: "Pakistan", backgroundColor: "#FBC02D", type: "chart" },
    { title: "Viral 50", subtitle: "Global", backgroundColor: "#43A047", type: "viral" },
    { title: "Viral 50", subtitle: "Pakistan", backgroundColor: "#FFB300", type: "viral" }
  ];

  const popularAlbums = [
    {
      title: "Pal Pal",
      artist: "Afusic, AliSoomroMusic",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Sicario",
      artist: "Shubh",
      image: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Jhol",
      artist: "Maanu, Annural Khalid",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Safar",
      artist: "Bayaan",
      image: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Afsos",
      artist: "Anuv Jain, AP Dhillon",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "My Terrible Mind",
      artist: "Talha Anjum, Umair",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Still Rollin",
      artist: "Shubh",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Excuses",
      artist: "AP Dhillon, Gurinder Gill",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Brown Munde",
      artist: "AP Dhillon, Gurinder Gill, Shinda Kahlon",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Desires",
      artist: "Karan Aujla",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Baller",
      artist: "Shubh",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Pasoori",
      artist: "Ali Sethi, Shae Gill",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center"
    }
  ];

  const trendingSongs = [
    {
      title: "Regardless",
      artist: "Asim Azhar",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Radha",
      artist: "Hasan Raheem, Umair",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Arz Kiya Hai | Coke Studio Bharat",
      artist: "Anuv Jain",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Par Chanaa De (Coke Studio Season 9)",
      artist: "Shilpa Rao, Noori",
      image: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "AZUL",
      artist: "Guru Randhawa, Gurjit Gill, Lavish Dhiman",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Thodi Si Daaru",
      artist: "AP Dhillon, Shreya Ghoshal",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Tu Aake Dekhle",
      artist: "King",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Insaan",
      artist: "AP Dhillon, Shinda Kahlon",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "One Love",
      artist: "Shubh",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Keh Len De",
      artist: "Hasan Raheem",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "Calaboose",
      artist: "Sidhu Moose Wala",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop&crop=center"
    },
    {
      title: "No Cap",
      artist: "Karan Aujla",
      image: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=200&h=200&fit=crop&crop=center"
    }
  ];

  const popularArtists = [
    {
      name: "Pritam",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Afusic",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Atif Aslam",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Shubh",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Anuv Jain",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Maanu",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "AP Dhillon",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Karan Aujla",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Diljit Dosanjh",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Hasan Raheem",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Ali Sethi",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=150&fit=crop&crop=center"
    },
    {
      name: "Talha Anjum",
      image: "https://images.unsplash.com/photo-1460036521480-ff49c08c2781?w=150&h=150&fit=crop&crop=center"
    }
  ];

  

  const isMobile = useIsMobile();

  return (
    <main className={`flex-1 overflow-y-auto ${isMobile ? 'p-4 pb-24' : 'p-6 pb-24'}`}>
      {/* Greeting */}
      <div className={`${isMobile ? 'mb-6' : 'mb-8'}`}>
        <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold mb-2`}>Good afternoon</h1>
      </div>

      {/* Popular Albums and Singles */}
      <section className={`${isMobile ? 'mb-6' : 'mb-8'}`}>
        <div className={`flex items-center justify-between ${isMobile ? 'mb-4' : 'mb-6'}`}>
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold`}>Popular albums and singles</h2>
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Show all
          </button>
        </div>
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            dragFree: true,
            containScroll: "trimSnaps"
          }}
        >
          <CarouselContent className={`${isMobile ? '-ml-2' : '-ml-4'}`}>
            {popularAlbums.map((album, index) => (
              <CarouselItem key={index} className={`basis-auto ${isMobile ? 'pl-2' : 'pl-4'}`}>
                <AlbumCard
                  title={album.title}
                  artist={album.artist}
                  image={album.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && <CarouselPrevious className="left-2" />}
          {!isMobile && <CarouselNext className="right-2" />}
        </Carousel>
      </section>

      {/* Trending Songs */}
      <section className={`${isMobile ? 'mb-6' : 'mb-8'}`}>
        <div className={`flex items-center justify-between ${isMobile ? 'mb-4' : 'mb-6'}`}>
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold`}>Trending songs</h2>
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Show all
          </button>
        </div>
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            dragFree: true,
            containScroll: "trimSnaps"
          }}
        >
          <CarouselContent className={`${isMobile ? '-ml-2' : '-ml-4'}`}>
            {trendingSongs.map((song, index) => (
              <CarouselItem key={index} className={`basis-auto ${isMobile ? 'pl-2' : 'pl-4'}`}>
                <SongCard
                  title={song.title}
                  artist={song.artist}
                  image={song.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && <CarouselPrevious className="left-2" />}
          {!isMobile && <CarouselNext className="right-2" />}
        </Carousel>
      </section>

      {/* Popular Radio */}
      <section className={`${isMobile ? 'mb-6' : 'mb-8'}`}>
        <div className={`flex items-center justify-between ${isMobile ? 'mb-4' : 'mb-6'}`}>
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold`}>Popular radio</h2>
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Show all
          </button>
        </div>
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            dragFree: true,
            containScroll: "trimSnaps"
          }}
        >
          <CarouselContent className={`${isMobile ? '-ml-2' : '-ml-4'}`}>
            {popularRadio.map((radio, index) => (
              <CarouselItem key={index} className={`basis-auto ${isMobile ? 'pl-2' : 'pl-4'}`}>
                <RadioCard
                  title={radio.title}
                  description={radio.description}
                  image={radio.image}
                  backgroundColor={radio.backgroundColor}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && <CarouselPrevious className="left-2" />}
          {!isMobile && <CarouselNext className="right-2" />}
        </Carousel>
      </section>

      {/* Featured Charts */}
      <section className={`${isMobile ? 'mb-6' : 'mb-8'}`}>
        <div className={`flex items-center justify-between ${isMobile ? 'mb-4' : 'mb-6'}`}>
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold`}>Featured Charts</h2>
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Show all
          </button>
        </div>
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            dragFree: true,
            containScroll: "trimSnaps"
          }}
        >
          <CarouselContent className={`${isMobile ? '-ml-2' : '-ml-4'}`}>
            {featuredCharts.map((chart, index) => (
              <CarouselItem key={index} className={`basis-auto ${isMobile ? 'pl-2' : 'pl-4'}`}>
                <ChartCard
                  title={chart.title}
                  subtitle={chart.subtitle}
                  backgroundColor={chart.backgroundColor}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && <CarouselPrevious className="left-2" />}
          {!isMobile && <CarouselNext className="right-2" />}
        </Carousel>
      </section>

      {/* Popular Artists */}
      <section className={`${isMobile ? 'mb-6' : 'mb-8'}`}>
        <div className={`flex items-center justify-between ${isMobile ? 'mb-4' : 'mb-6'}`}>
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold`}>Popular artists</h2>
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Show all
          </button>
        </div>
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            dragFree: true,
            containScroll: "trimSnaps"
          }}
        >
          <CarouselContent className={`${isMobile ? '-ml-2' : '-ml-4'}`}>
            {popularArtists.map((artist, index) => (
              <CarouselItem key={index} className={`basis-auto ${isMobile ? 'pl-2' : 'pl-4'}`}>
                <ArtistCard
                  name={artist.name}
                  image={artist.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && <CarouselPrevious className="left-2" />}
          {!isMobile && <CarouselNext className="right-2" />}
        </Carousel>
      </section>
    </main>
  );
};

export default MainContent;