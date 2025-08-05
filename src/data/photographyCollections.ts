export interface PhotographyImage {
    id: string;
    title: string;
    imageUrl: string;
    description?: string;
    date?: string;
}


export const photographyCollections: PhotographyImage[] = [
    {
        id: '1',
        title: 'Photography 1',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/1.webp`,
        description: 'A beautiful moment captured in time',
        date: '2024'
    },
    {
        id: '2',
        title: 'Photography 2',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/2.webp`,
        description: 'Exploring light and shadow',
        date: '2024'
    },
    {
        id: '3',
        title: 'Photography 3',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/3.webp`,
        description: 'Natural beauty in focus',
        date: '2024'
    },
    {
        id: '4',
        title: 'Photography 4',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/4.webp`,
        description: 'Urban landscape perspective',
        date: '2024'
    },
    {
        id: '5',
        title: 'Photography 5',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/5.webp`,
        description: 'Abstract composition',
        date: '2024'
    },
    {
        id: '6',
        title: 'Photography 6',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/6.webp`,
        description: 'Minimalist approach',
        date: '2024'
    },
    {
        id: '7',
        title: 'Photography 7',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/7.webp`,
        description: 'Dynamic movement',
        date: '2024'
    },
    {
        id: '8',
        title: 'Photography 8',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/8.webp`,
        description: 'Emotional depth',
        date: '2024'
    },
    {
        id: '9',
        title: 'Photography 9',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/9.webp`,
        description: 'Color harmony',
        date: '2024'
    },
    {
        id: '10',
        title: 'Photography 10',
        imageUrl: `${process.env.PUBLIC_URL}/photos/optimized/10.webp`,
        description: 'Final composition',
        date: '2024'
    }
];