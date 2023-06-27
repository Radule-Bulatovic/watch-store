export interface PhotoT {
  id: number;
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: FormatsT;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}

export interface FormatsT {
  thumbnail: ThumbnailT;
  small: ThumbnailT;
}

export interface ThumbnailT {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: null;
  width: number;
  height: number;
  size: number;
  url: string;
}
