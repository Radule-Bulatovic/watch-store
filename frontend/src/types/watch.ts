import { BrandT, PhotoT } from ".";

export interface WatchT {
  id: number;
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  brand: BrandT;
  photo: PhotoT;
}
