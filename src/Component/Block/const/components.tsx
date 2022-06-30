import React, { Component } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { GameDetail } from "./const";
interface SelectProps {
  nameId: string;
  nameLabel: string;
  listOptions: {
    index: number;
    name: string;
    value: string;
  }[];
  handleSelected: (string: string) => void;
}

export class Select extends Component<SelectProps> {
  selectedItems = (e: any) => {
    this.props.handleSelected(e.target.value);
  }
  render() {
    const { nameId, nameLabel, listOptions } = this.props;

    return (
      <div className="select-wrapper">
        <label htmlFor={nameId} className="select__label">{`${nameLabel}:`}</label>
        <select name={nameId} id={nameId} onChange={this.selectedItems}>
          {listOptions.map((option) => (
            <option value={option.value} key={option.index}>{option.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

interface PopUpDetailProps {
  gameDetail: null | GameDetail;
  closePopup: () => void;
}

export class PopUpDetail extends Component<PopUpDetailProps>{
  render() {
    const { gameDetail, closePopup } = this.props;
      console.log(gameDetail?.minimum_system_requirements.os);
      
    return (
      <div className="popup">
        <div className="popup-cover"></div>
        <div className="popup-wrapper">
          <header className="popup-wrapper__header">
            <nav className="header">
              <div className="header__avatar">
                <img src={gameDetail?.thumbnail} alt="logo" />
              </div>
              <span className="header__title">
                {gameDetail?.title}
              </span>
              <span className="header__status">
                {gameDetail?.status}
              </span>
            </nav>
            <div className="closebtn" onClick={closePopup}>
              <AiOutlineClose />
            </div>
          </header>
          <div className="content">
            <aside className="content__side">
                <p> {gameDetail?.short_description} </p>
                <p> Publisher: <br/> {gameDetail?.publisher} </p>
                <p> Genre: <br/> {gameDetail?.genre} </p>
                <p> Release Date: <br/> {gameDetail?.release_date} </p>
                <table>
                  <tr>
                    <th colSpan={2}>Minimum System Requirements</th>
                  </tr>
                  <tr>
                    <td>OS</td>
                    <td>{gameDetail?.minimum_system_requirements.os}</td>
                  </tr>
                  <tr>
                    <td>Processor</td>
                    <td>{gameDetail?.minimum_system_requirements.processor}</td>
                  </tr>
                  <tr>
                    <td>Memory</td>
                    <td>{gameDetail?.minimum_system_requirements.memory}</td>
                  </tr>
                  <tr>
                    <td>Graphics</td>
                    <td>{gameDetail?.minimum_system_requirements.graphics}</td>
                  </tr>
                  <tr>
                    <td>Storage</td>
                    <td>{gameDetail?.minimum_system_requirements.storage}</td>
                  </tr>
                </table>
            </aside>
            <section className="content__main">

            </section>
          </div>
        </div>
      </div>
    )
  }
}

interface screenShotsProps{
  id: number;
  linkImage: string;
}
export class screenShots extends Component<screenShotsProps> {
  render() {
    const { id, linkImage } = this.props;
    return (
      <></>
    )
  }

}
