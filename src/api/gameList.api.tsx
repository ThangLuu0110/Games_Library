export default function getGameData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '65f078d811msh87b64e2af8bd706p1c7f5ejsn4bf9939b6d15'
        }
    };

    return fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
}

export function searchGameData(category: string, platform: string, sort: string) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '65f078d811msh87b64e2af8bd706p1c7f5ejsn4bf9939b6d15'
        }
    };

    const sortBy: string = 'sort-by';

    const filter = {
        category: category,
        platform: platform,
        [sortBy]: sort,
    };

    let key: keyof typeof filter;

    for(key in filter){
        if(filter[key] === ''){
            delete filter[key];
        }  
    }

    const queryStr = new URLSearchParams(filter).toString();

    return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?${queryStr}`, options)
        .then(response => response.json())
        .catch(err => console.log(err))
}

export function getGameDetail(id: number){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '65f078d811msh87b64e2af8bd706p1c7f5ejsn4bf9939b6d15'
        }
    };
    
    return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        .then(response => response.json())
}
