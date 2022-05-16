import MMORPG from "../../../assets/images/MMORPG_category.jpg"
import Fighting from '../../../assets/images/Fighting_category.jpg';
import Shooter from '../../../assets/images/Shooter_category.jpg';
import Racing from '../../../assets/images/Racing_category.jpg';
import MOBA from '../../../assets/images/MOBA_category.jpg';
import Sport from '../../../assets/images/Sport_category.jpg';
import Fantasy from '../../../assets/images/Fantasy_category.jpg';
import CardGames from '../../../assets/images/Cardgames_category.jpg';
import SocialGames from '../../../assets/images/Socialgames_category.jpg';
import Strategy from '../../../assets/images/Strategy_category.jpg';
import BattleRoyale from '../../../assets/images/Battleroyale_category.jpg';
import Others from '../../../assets/images/Others_category.jpg';

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

export const categoryList:
    Array<{
        index: number;
        categoryName: string,
        image: any
    }> = [
        {
            index: 0,
            categoryName: "Battle Royale",
            image: BattleRoyale
        },
        {
            index: 1,
            categoryName: "MMORPG",
            image: MMORPG
        },
        {
            index: 2,
            categoryName: "Fighting",
            image: Fighting
        },
        {
            index: 3,
            categoryName: "Shooter",
            image: Shooter
        },
        {
            index: 4,
            categoryName: "Card Game",
            image: CardGames
        },
        {
            index: 5,
            categoryName: "MOBA",
            image: MOBA
        },
        {
            index: 6,
            categoryName: "Racing",
            image: Racing
        },
        {
            index: 7,
            categoryName: "Social",
            image: SocialGames
        },
        {
            index: 8,
            categoryName: "Sports",
            image: Sport
        },
        {
            index: 9,
            categoryName: "Fantasy",
            image: Fantasy
        },
        {
            index: 10,
            categoryName: "Strategy",
            image: Strategy
        },
        {
            index: 11,
            categoryName: "Others",
            image: Others
        },
    ]