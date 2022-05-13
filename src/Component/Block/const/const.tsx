export interface GameDetail {
    id: number;
    title: string;
    thumbnail: string;
    status: string;
    shortDescription: string;
    description: string;
    publisher: string;
    genre: string;
    releaseDate: string;
    minimumSystemRequirements: {
        os: string;
        processor: string;
        memory: string;
        graphics: string;
        storage: string;
    }[];
    screenShots: {
        id: number;
        image: string;
    }[]
}

export interface GameData {
    id: number;
    title: string;
    shortDescription: string;
    genre: string;
    publisher: string;
    releaseDate: string;
}

