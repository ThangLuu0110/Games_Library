import MMORPG from "../../../assets/images/MMORPG_category.jpg";
import Fighting from "../../../assets/images/Fighting_category.jpg";
import Shooter from "../../../assets/images/Shooter_category.jpg";
import Racing from "../../../assets/images/Racing_category.jpg";
import MOBA from "../../../assets/images/MOBA_category.jpg";
import Sport from "../../../assets/images/Sport_category.jpg";
import Fantasy from "../../../assets/images/Fantasy_category.jpg";
import CardGames from "../../../assets/images/Cardgames_category.jpg";
import SocialGames from "../../../assets/images/Socialgames_category.jpg";
import Strategy from "../../../assets/images/Strategy_category.jpg";
import BattleRoyale from "../../../assets/images/Battleroyale_category.jpg";

export interface GameDetail {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  publisher: string;
  genre: string;
  releaseDate: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  }[];
  screenshots: {
    id: number;
    image: string;
  }[];
}

export interface GameData {
  id: number;
  title: string;
  publisher: string;
  release_date: string;
  thumbnail: string;
  short_description: string;
}

export const GameSort:  Array<{
  index: number;
  name: string;
  value: string;
}> = [
  { 
    index: 0, 
    name: '',
    value: ''
  },
  {
    index: 1,
    name: 'Realese Date',
    value: 'release-date',
  },
  {
    index: 2,
    name: 'Popularity',
    value: 'popularity'
  },
  { 
    index: 3, 
    name: 'Alphabet',
    value: 'alphabetical'
  },
  {
    index: 4,
    name: 'Relevance',
    value: 'relevence',
  },
];

export const GamePlatform: Array<{
  index: number;
  name: string;
  value: string;
}> = [
  { 
    index: 0, 
    name: 'All',
    value: ''
  },
  {
    index: 1,
    name: 'PC',
    value: 'pc',
  },
  {
    index: 2,
    name: 'Browser',
    value: 'browser'
  }
]

export const GameCategory: Array<{
  index: number;
  name: string;
  value: string;
}> = [
  {
    index: 0,
    name: 'All',
    value: '',
  },
  {
    index: 1,
    name: 'Battle Royal Game',
    value: 'battle-royale',
  },
  {
    index: 2, 
    name: 'MMORPG',
    value: 'mmorpg',
  },
  {
    index: 3, 
    name: 'Fighting',
    value: 'fighting'
  },
  {
    index: 4, 
    name: 'Shooter',
    value: 'shooter'
  },
  {
    index: 5, 
    name: 'Card Game',
    value: 'card'
  },
  {
    index: 6, 
    name: 'MOBA',
    value: 'moba'
  },
  {
    index: 7, 
    name: 'Racing',
    value: 'racing'
  },
  {
    index: 8,
    name: 'Social',
    value: 'social'
  },
  {
    index: 9,
    name: 'Sports',
    value: 'sports'
  },
  {
    index: 10,
    name: 'Fantasy',
    value: 'fantasy'
  },
  {
    index: 11,
    name: 'Strategy',
    value: 'strategy'
  }
]

export const categoryList: Array<{
  index: number;
  categoryName: string;
  image: any;
  defination: string;
  games: string;
}> = [
  {
    index: 0,
    categoryName: "Battle Royale",
    image: BattleRoyale,
    defination:
      "A battle royale game is an online multiplayer video game genre that blends last-man-standing gameplay with the survival, exploration and scavenging elements of a survival game.",
    games: "Apex Legends, Fornite, Call Of Duty: Modern Warface",
  },
  {
    index: 1,
    categoryName: "MMORPG",
    image: MMORPG,
    defination:
      "A massively multiplayer online role-playing game (MMORPG) is a video game that combines aspects of a role-playing video game and a massively multiplayer online game.",
    games: "Elden Ring, Path of Exile, Genshin Impact",
  },
  {
    index: 2,
    categoryName: "Fighting",
    image: Fighting,
    defination:
      'A fighting game (also known as versus fighting game) is a video game genre that involves combat between two (or more) players. Fighting game combat features mechanics such as blocking, grappling, counter-attacking, and chaining attacks together into "combos".',
    games: "Super Smash Bros. Melee, Super Smash Bros. Ultimate, ",
  },
  {
    index: 3,
    categoryName: "Shooter",
    image: Shooter,
    defination:
      "Shooter video games or shooters are a subgenre of action video games where the focus is almost entirely on the defeat of the character's enemies using the weapons given to the player.",
    games: "",
  },
  {
    index: 4,
    categoryName: "Card Game",
    image: CardGames,
    defination:
      "A card game is any game using playing cards as the primary device with which the game is played, be they traditional or game-specific.",
    games: "Hearthstone, Yu-Gi-Oh! Master Duel, Magic: The Gathering",
  },
  {
    index: 5,
    categoryName: "MOBA",
    image: MOBA,
    defination:
      "“MOBA” stands for “multiplayer online battle arena.” Sometimes MOBA games are referred to as “action real-time strategy.” In fact, the very first MOBA games were user-created mods (modifications) of real-time strategy games.",
    games: "League of Legends, VALORANT, Dota 2",
  },
  {
    index: 6,
    categoryName: "Racing",
    image: Racing,
    defination:
      "Racing games are a video game genre in which the player participates in a racing competition with any type of land, water, air, or space vehicles. They may be based on anything from real-world racing leagues to fantastical settings.",
    games: "iRacing, BeamNG.drive, F1 2021",
  },
  {
    index: 7,
    categoryName: "Social",
    image: SocialGames,
    defination:
      "A social game may refer to tabletop, other face-to-face indoor or outdoor games, or video games that allow or require social interaction between players as opposed to games played in solitude, games played at tournaments or competitions or games played for money.",
    games: "Stardew Valley, Minecraft, FarmVille",
  },
  {
    index: 8,
    categoryName: "Sports",
    image: Sport,
    defination:
      "A sports video game is a video game that simulates the practice of sports. Most sports have been recreated with a game, including team sports, track and field, extreme sports, and combat sports.",
    games: "",
  },
  {
    index: 9,
    categoryName: "Fantasy",
    image: Fantasy,
    defination:
      " A game in which players assume the roles of characters and act out fantastical adventures, the outcomes of which are partially determined by chance, as by the roll of dice.",
    games: "Elden Ring, Genshin Impact, The Witcher 3: Wild Hunt",
  },
  {
    index: 10,
    categoryName: "Strategy",
    image: Strategy,
    defination:
      "A strategy game or strategic game is a game (e.g. a board game) in which the players' uncoerced, and often autonomous, decision-making skills have a high significance in determining the outcome. Almost all strategy games require internal decision tree-style thinking, and typically very high situational awareness.",
    games: "Into The Breach, FTL: Faster Than Light, XCOM 2",
  },
];
