export interface Painting {
  id: string;
  title: string;
  artist: string;
  year: number;
  description: string;
  imageUrl: string;
  collectionId: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  coverImageUrl: string;
  paintings: Painting[];
}

export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
} 