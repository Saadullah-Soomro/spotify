# Spotify Vibes

A modern, responsive music streaming interface inspired by Spotify, built with React and TypeScript.

## Features

- 🎵 Modern music streaming interface
- 🎨 Dark theme with Spotify-inspired design
- 📱 Fully responsive design
- 🎧 Interactive music player components
- 📊 Music charts and trending content
- 🎪 Carousel displays for albums, songs, and artists
- 🔍 Search functionality (UI ready)
- 🎛️ Volume and playback controls

## Tech Stack

- **React** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- **Lucide React** - Beautiful & consistent icon toolkit
- **React Router** - Declarative routing for React
- **Embla Carousel** - Lightweight carousel library

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd spotify-vibes
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be running at `http://localhost:8080`.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run build:dev` - Create a development build
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Main header component
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── MainContent.tsx # Main content area
│   ├── MusicPlayer.tsx # Music player controls
│   └── ...             # Other components
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
├── App.tsx             # Main App component
└── main.tsx           # Application entry point
```

## Components Overview

- **Header** - Search bar and user profile section
- **Sidebar** - Navigation menu with home, search, library options
- **MainContent** - Displays music content including:
  - Recently played items
  - Popular albums and singles
  - Trending songs
  - Popular radio stations
  - Featured charts
  - Popular artists
- **MusicPlayer** - Bottom music player with playback controls

## Customization

The project uses Tailwind CSS for styling. You can customize the theme by modifying:

- `tailwind.config.ts` - Tailwind configuration
- `src/components/ui/` - Component styles
- Color scheme and spacing can be adjusted in the config files

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from Spotify
- Icons from Lucide React
- UI components from Shadcn/ui
