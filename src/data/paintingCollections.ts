import { Collection } from '../types';

export const collections: Collection[] = [
  {
    id: '1',
    name: 'No Name',
    description: 'A 19th-century art movement characterized by relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities.',
    coverImageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/collection_cover.jpg`,
    paintings: [
      {
        id: '1',
        title: 'Starry Night',
        artist: 'Masi',
        year: 2025,
        description: 'One of van Gogh\'s most famous works, depicting the view from his asylum room at Saint-Rémy-de-Provence.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/1.jpg`,
        collectionId: 'impressionism'
      },
      {
        id: '2',
        title: 'Water Lilies',
        artist: 'Masi',
        year: 2025,
        description: 'A series of approximately 250 oil paintings by French Impressionist Claude Monet.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/2.jpg`,
        collectionId: 'impressionism'
      },
      {
        id: '3',
        title: 'Sunflowers',
        artist: 'Masi',
        year: 2025,
        description: 'A series of still life paintings by the Dutch painter Vincent van Gogh.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/3.jpg`,
        collectionId: 'impressionism'
      },
      {
        id: '4',
        title: 'Sunflowers',
        artist: 'Masi',
        year: 2025,
        description: 'A series of still life paintings by the Dutch painter Vincent van Gogh.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/4.jpg`,
        collectionId: 'impressionism'
      },
      {
        id: '5',
        title: 'Sunflowers',
        artist: 'Masi',
        year: 2025,
        description: 'A series of still life paintings by the Dutch painter Vincent van Gogh.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/5.jpg`,
        collectionId: 'impressionism'
      },
      {
        id: '6',
        title: 'Sunflowers',
        artist: 'Masi',
        year: 2025,
        description: 'A series of still life paintings by the Dutch painter Vincent van Gogh.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/6.jpg`,
        collectionId: 'impressionism'
      },
      {
        id: '7',
        title: 'Sunflowers',
        artist: 'Masi',
        year: 2025,
        description: 'A series of still life paintings by the Dutch painter Vincent van Gogh.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/7.jpg`,
        collectionId: 'impressionism'
      },
      {
        id: '8',
        title: 'Sunflowers',
        artist: 'Masi',
        year: 2025,
        description: 'A series of still life paintings by the Dutch painter Vincent van Gogh.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/8.jpg`,
        collectionId: 'impressionism'
      },
      {
        id: '9',
        title: 'Sunflowers',
        artist: 'Masi',
        year: 2025,
        description: 'A series of still life paintings by the Dutch painter Vincent van Gogh.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/9.jpg`,
        collectionId: 'impressionism'
      },
      {
        id: '10',
        title: 'Sunflowers',
        artist: 'Masi',
        year: 2025,
        description: 'A series of still life paintings by the Dutch painter Vincent van Gogh.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/no_name/10.jpg`,
        collectionId: 'impressionism'
      },
    ]
  },
  {
    id: '2',
    name: 'Abstract',
    description: 'Abstract paintings are characterized by their lack of representational content, focusing instead on the use of color, shape, and form to create a visual experience.',
    coverImageUrl: `${process.env.PUBLIC_URL}/paintings/abstract/collection_cover.jpg`,
    paintings: [
      {
        id: '1',
        title: 'Starry Night',
        artist: 'Masi',
        year: 2025,
        description: 'One of van Gogh\'s most famous works, depicting the view from his asylum room at Saint-Rémy-de-Provence.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/abstract/1.jpg`,
        collectionId: '1'
      },
      {
        id: '2',
        title: 'Starry Night',
        artist: 'Masi',
        year: 2025,
        description: 'One of van Gogh\'s most famous works, depicting the view from his asylum room at Saint-Rémy-de-Provence.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/abstract/2.jpg`,
        collectionId: '1'
      },
      {
        id: '3',
        title: 'Starry Night',
        artist: 'Masi',
        year: 2025,
        description: 'One of van Gogh\'s most famous works, depicting the view from his asylum room at Saint-Rémy-de-Provence.',
        imageUrl: `${process.env.PUBLIC_URL}/paintings/abstract/3.jpg`,
        collectionId: '1'
      },
    ]
  }
]; 