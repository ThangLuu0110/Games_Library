import React, { Component, useEffect, useRef } from "react";
interface SelectProps {
  nameId: string;
  nameLabel: string;
  listOptions: Array<string>;
}

export class Select extends Component<SelectProps> {    
  render() {
    const { nameId, nameLabel, listOptions } = this.props;

    return (
      <div>
        <label htmlFor={nameId}>{`${nameLabel}:`}</label>
        <select name={nameId} id={nameId} onChange={(e) => {
          console.log(e.target.value);
        }}>
          {listOptions.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}
