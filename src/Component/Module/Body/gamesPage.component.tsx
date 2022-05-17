import React, { Component } from 'react';
import { GameData } from '../../Block/const/const'
import { getGameData } from '../../../api/gameList.api'
interface GamesPageState {
    GamesList: GameData[];
}

export default class GamesPage extends Component {
    state = {
        GamesList: [],
    } as GamesPageState;

    render() {
        return (
            <div className="content">

            </div>
        )
    }
}