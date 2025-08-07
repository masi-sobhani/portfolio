export interface PhotographyImage {
    id: string;
    titleKey: string;
    imageUrl: string;
    descriptionKey?: string;
    date?: string;
}


export const photographyCollections: PhotographyImage[] = [
    {
        id: '1',
        titleKey: 'photos.photo1',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/1.webp`,
        descriptionKey: 'photos.photo1Description',
        date: '2024'
    },
    {
        id: '2',
        titleKey: 'photos.photo2',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/2.webp`,
        descriptionKey: 'photos.photo2Description',
        date: '2024'
    },
    {
        id: '3',
        titleKey: 'photos.photo3',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/3.webp`,
        descriptionKey: 'photos.photo3Description',
        date: '2024'
    },
    {
        id: '4',
        titleKey: 'photos.photo4',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/4.webp`,
        descriptionKey: 'photos.photo4Description',
        date: '2024'
    },
    {
        id: '5',
        titleKey: 'photos.photo5',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/5.webp`,
        descriptionKey: 'photos.photo5Description',
        date: '2024'
    },
    {
        id: '6',
        titleKey: 'photos.photo6',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/6.webp`,
        descriptionKey: 'photos.photo6Description',
        date: '2024'
    },
    {
        id: '7',
        titleKey: 'photos.photo7',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/7.webp`,
        descriptionKey: 'photos.photo7Description',
        date: '2024'
    },
    {
        id: '8',
        titleKey: 'photos.photo8',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/8.webp`,
        descriptionKey: 'photos.photo8Description',
        date: '2024'
    },
    {
        id: '9',
        titleKey: 'photos.photo9',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/9.webp`,
        descriptionKey: 'photos.photo9Description',
        date: '2024'
    },
    {
        id: '10',
        titleKey: 'photos.photo10',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/10.webp`,
        descriptionKey: 'photos.photo10Description',
        date: '2024'
    }
];