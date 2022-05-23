import React, { Component } from "react";
import { GameData } from "../../Block/const/const";
import getGameData from "../../../api/gameList.api";
import { SearchTable } from "../../Block/search_table/searchTable";

interface GameProps {
  gamesList: Array<any>;
}
export default class GamesPage extends Component {
  state = {
    gamesList: [],
  } as GameProps;

  componentDidMount() {
    getGameData().then((games) => {
      this.setState(
        {
          ...this.state,
          gamesList: games,
        },
        () => {}
      );
    });
  }

  render() {
    return (
      <div className="content grid">
        <SearchTable />
        <div className="gamespage grid wide">
          <ul className="gamespage-list">
            {this.state.gamesList.map((game) => (
              <li key={game.id} className="items">
                <div className="items-image">
                  <img src={`${game.thumbnail}`} alt="" />
                </div>
                <div className="items-name">{game.title}</div>
                <div className="items-info"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
