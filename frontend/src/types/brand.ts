import { PhotoT, WatchT } from ".";

export interface BrandT {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  watches: WatchT[];
  logo: PhotoT;
}
