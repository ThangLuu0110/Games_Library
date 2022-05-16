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
        image: any,
        defination: string,
    }> = [
        {
            index: 0,
            categoryName: "Battle Royale",
            image: BattleRoyale,
            defination: 
            'A battle royale game is an online multiplayer video game genre that blends last-man-standing gameplay with the survival, exploration and scavenging elements of a survival game.'
        },
        {
            index: 1,
            categoryName: "MMORPG",
            image: MMORPG,
            defination: 
            'A massively multiplayer online role-playing game (MMORPG) is a video game that combines aspects of a role-playing video game and a massively multiplayer online game.',
        },
        {
            index: 2,
            categoryName: "Fighting",
            image: Fighting,
            defination: 
            'A fighting game (also known as versus fighting game) is a video game genre that involves combat between two (or more) players. Fighting game combat features mechanics such as blocking, grappling, counter-attacking, and chaining attacks together into "combos".',
        },
        {
            index: 3,
            categoryName: "Shooter",
            image: Shooter,
            defination: 
            "Shooter video games or shooters are a subgenre of action video games where the focus is almost entirely on the defeat of the character's enemies using the weapons given to the player. Usually these weapons are firearms or some other long-range weapons, and can be used in combination with other tools such as grenades for indirect offense, armor for additional defense, or accessories such as telescopic sights to modify the behavior of the weapons.",
        },
        {
            index: 4,
            categoryName: "Card Game",
            image: CardGames,
            defination: '',
        },
        {
            index: 5,
            categoryName: "MOBA",
            image: MOBA,
            defination: 
            '“MOBA” stands for “multiplayer online battle arena.” Sometimes MOBA games are referred to as “action real-time strategy.” In fact, the very first MOBA games were user-created mods (modifications) of real-time strategy games.',
        },
        {
            index: 6,
            categoryName: "Racing",
            image: Racing,
            defination: 
            'Racing games are a video game genre in which the player participates in a racing competition with any type of land, water, air, or space vehicles. They may be based on anything from real-world racing leagues to fantastical settings.',
        },
        {
            index: 7,
            categoryName: "Social",
            image: SocialGames,
            defination: '',
        },
        {
            index: 8,
            categoryName: "Sports",
            image: Sport,
            defination: 
            'A sports video game is a video game that simulates the practice of sports. Most sports have been recreated with a game, including team sports, track and field, extreme sports, and combat sports.',
        },
        {
            index: 9,
            categoryName: "Fantasy",
            image: Fantasy,
            defination: '',
        },
        {
            index: 10,
            categoryName: "Strategy",
            image: Strategy,
            defination: '',
        },
        {
            index: 11,
            categoryName: "Others",
            image: Others,
            defination: '',
        },
    ]