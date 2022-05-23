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
                console.log(games);

                this.setState({
                    ...this.state,
                    gameList: games,
                })
            }, () => {
                ;
            })
    }

    render() {
        return (
            <div className="content grid">
                <div className="gamespage grid wide">
                    <ul className="gamespage-list">
                        {
                            this.state.gameList.map(game => (
                                <li key={game.id} className="items">
                                    <div className="items-image">
                                        <img src={`${game.thumbnail}`} alt="" />
                                    </div>
                                    <div className="items-info">
                                        <h2 className="title">
                                            <b>Title: </b>
                                            {game.title}
                                        </h2>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )

    }
}