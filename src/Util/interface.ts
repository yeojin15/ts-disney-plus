export interface VideoResults {
  id?: string;
  key?: string;
}
export interface MovieProps {
  id: string;
  title: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  media_type: string;
  popularity?: number;
  release_date: string;
  video?: boolean;
  videos?: { results: VideoResults[] };
}
