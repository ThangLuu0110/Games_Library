import React, { Component } from 'react';
import { GameData } from '../../Block/const/const'
import getGameData from '../../../api/gameList.api'

interface GameProps {
    gameList: GameData[];
}
export default class GamesPage extends Component {
    state = {
        gameList: [],
    } as GameProps;

    componentDidMount() {
        getGameData()
            .then(games => {
                this.setState({
                    ...this.state,
                    gameList: games,
                })
            }, () => { })
    }

    render() {
        return (
            <div className="content grid">
                <div className="gamespage grid wide">
                    <ul className="gamespage-list">
                        {
                            this.state.gameList.map(game => (
                                <li key={game.id} className="">
                                    {game.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )

    }
}