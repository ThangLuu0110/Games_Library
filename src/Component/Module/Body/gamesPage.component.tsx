import React, { Component } from 'react';
import { GameData, GameDetail } from '../../Block/const/const'
import getGameData, { getGameDetail, searchGameData } from '../../../api/gameList.api'
import SearchTable from '../../Block/search_table/searchTable';
import { PopUpDetail } from '../../Block/const/components';

interface GameState {
    gameList: GameData[];
    gameDetail: GameDetail[];
    categorySelected: string;
    showPopUp: boolean;
}
interface GameProps{
    handleActiveTab: (e: any) => void;
}
export default class GamesPage extends Component<GameProps> {
    state = {
        gameList: [],
        gameDetail: [],
        categorySelected: '',
        showPopUp: false,
    } as GameState;

    handleInit = () => {
        getGameData()
            .then(games => {
                this.setState({
                    ...this.state,
                    gameList: games,
                })
            }, () => {})
    }

    handleInitDetail = (id: number) => {
        getGameDetail(id)
            .then(games => { 
                this.setState({
                    ...this.state,
                    gameDetail: games,
                    showPopUp: true,
                },
                    () => {
                        
                    }
                )
            })
    }

    componentDidMount() {
        this.props.handleActiveTab('Games')
        this.handleInit();
    }

    handleSearch = (category: string, platform: string, sort: string) => {
        if (category === '' && platform === '' && sort === '') {
            this.handleInit()
        }
        else {
            searchGameData(category, platform, sort)
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
                    <SearchTable
                        handleSearch={this.handleSearch}
                    />
                    <ul className="gamespage-list">
                        {this.state.gameList.length > 0 &&
                            this.state.gameList.map(game => (
                                <li key={game.id} className="items">
                                    <div
                                        className="items-image"

                                    >
                                        <img src={`${game.thumbnail}`} alt="" />
                                    </div>
                                    <div className="items-name" onClick={() => {
                                        this.handleInitDetail(game.id)
                                    }}>
                                        {game.title}
                                    </div>
                                    <div className="items-infor">
                                        <p><b>Publisher: </b>{game.publisher}</p>
                                        <p><b>Released: </b>{game.release_date}</p>
                                        <p><b> Description: </b><br />{game.short_description}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    {this.state.showPopUp && <PopUpDetail gameDetail={this.state.gameDetail}/> }
                </div>
            </div>
        )

    }
}


