import React, { Component } from 'react';
import { GameData } from '../../Block/const/const'
import getGameData, { searchGameData } from '../../../api/gameList.api'
import SearchTable from '../../Block/search_table/searchTable';

interface GameProps {
    gameList: GameData[];
    categorySelected: string;
}
export default class GamesPage extends Component {
    state = {
        gameList: [],
        categorySelected: '',
    } as GameProps;

    handleInit = () => {
        getGameData()
            .then(games => {
                this.setState({
                    ...this.state,
                    gameList: games,
                })
            }, () => {
                ;
            })
    }

    componentDidMount() {
        this.handleInit();
    }

    handleSearch = (category: string, platform: string) => {
        if (category === '' && platform === '') {
            this.handleInit()
        }
        else {
            searchGameData(category, platform)
                .then(games => {
                    this.setState({
                        ...this.state,
                        gameList: games,
                    })
                }, () => {
                    ;
                })
        };
    }

    render() {
        return (
            <div className="content grid">
                <div className="gamespage grid wide">
                    <SearchTable handleSearch={this.handleSearch} />
                    <ul className="gamespage-list">
                        {this.state.gameList.length > 0 &&
                            this.state.gameList.map(game => (
                                <li key={game.id} className="items">
                                    <div className="items-image">
                                        <img src={`${game.thumbnail}`} alt="" />
                                    </div>
                                    <div className="items-name">
                                        {game.title}
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