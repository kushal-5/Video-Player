import TikTokDownloader from './components/TikTokDownloader';
import TeraBoxDownloader from './components/TeraBoxDownloader';
import YouTubeDownloader from './components/YouTubeDownloader';

export default function Home() {
  return (
    
    <div>
      <h1>All-in-One Video Downloader</h1>
      <TikTokDownloader />
      <TeraBoxDownloader />
      <YouTubeDownloader />
    </div>
  );
}
