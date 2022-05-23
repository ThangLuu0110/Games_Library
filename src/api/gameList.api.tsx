export default function getGameData(){
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