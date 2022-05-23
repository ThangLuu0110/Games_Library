import React, { Component } from "react";
import { Select } from "../const/components";
import { gameCategory } from "../const/const";
interface SearchProps {
  category: string;
}
export class SearchTable extends Component {
  state = {
    category: "",
  } as SearchProps;
  render() {
    return (
      <>
        <Select
          nameId="category"
          nameLabel="Category"
          listOptions={gameCategory}
        />
      </>
    );
  }
}
