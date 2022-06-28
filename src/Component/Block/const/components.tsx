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
  
    return (
      <div className="popup">
        <div className="popup-cover"></div>
        <div className="popup-wrapper">
            <div className="closebtn" onClick={closePopup}>
              <AiOutlineClose />
            </div>
        </div>
      </div>
    )
  }
}
