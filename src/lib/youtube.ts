// src/lib/youtube.ts
import Parser from 'rss-parser';

export interface YouTubeVideo {
  title: string;
  link: string;
  id: string;
  pubDate: string;
  thumbnail: string;
}

const parser = new Parser();

export async function getLatestYouTubeVideos(): Promise<YouTubeVideo[]> {
  const feed = await parser.parseURL(
    'https://www.youtube.com/feeds/videos.xml?channel_id=UCS9TV9GaQyPEHnd_OnnFCNQ'
  );

  return feed.items.slice(0, 6).map(item => ({
    title: item.title ?? '',
    link: item.link ?? '',
    id: item.link?.split('v=')[1] ?? '',
    pubDate: item.pubDate ?? '',
    thumbnail: item.enclosure?.url ?? ''
  }));
}
