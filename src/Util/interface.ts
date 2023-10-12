export interface VideoResults {
  id?: string;
  key?: string;
}
export interface MovieProps {
  id: string | number;
  title: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  media_type: string;
  popularity?: number;
  release_date: string;
  first_air_date?: string;
  vote_average?: number;
  video?: boolean;
  videos?: { results: VideoResults[] };
}
export interface CategoryArray {
  name: string;
  img: string;
  video: string;
}
export interface FooterLinkArray {
  name: string;
  href: string;
}
export interface MovieListProps {
  title: string;
  id: string | number;
  fetchUrl: string;
}
