import React, { Component } from "react";
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


