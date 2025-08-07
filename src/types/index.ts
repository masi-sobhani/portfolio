export interface Painting {
  id: string;
  titleKey: string;
  artist: string;
  year: number;
  descriptionKey: string;
  imageUrl: string;
  collectionId: string;
}

export interface Collection {
  id: string;
  nameKey: string;
  descriptionKey: string;
  coverImageUrl: string;
  paintings: Painting[];
}

export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
} 