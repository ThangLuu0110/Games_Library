import React, { Component } from "react";
import { Select } from "../const/components";
import { GameCategory, GamePlatform, GameSort } from "../const/const";
import { BsSearch } from 'react-icons/bs';

interface SearchTableState {
  categoryList: {
    index: number;
    name: string;
    value: string;
  }[];
  categorySelected: string;
  platformList: {
    index: number;
    name: string;
    value: string;
  }[];
  platformSelected: string;
  sortList: {
    index: number;
    name: string;
    value: string;
  }[];
  sortSelected: string;
}

interface SearchTableProps {
  handleSearch: (category: string, platform: string, sort: string) => void;
}
export default class SearchTable extends Component<SearchTableProps> {
  state = {
    categoryList: GameCategory,
    categorySelected: '',
    platformList: GamePlatform,
    platformSelected: '',
    sortList: GameSort,
    sortSelected: '',
  } as SearchTableState;

  handleSelectCategory = (selectedValue: string) => {
    this.setState({
      ...this.state,
      categorySelected: selectedValue
    }, () => {
    })
  }

  handleSelectPlatform = (selectedValue: string) => {
    this.setState({
      ...this.state,
      platformSelected: selectedValue
    }, () => {
    })
  }

  handleSelectSort = (selectedValue: string) => {
    this.setState({
      ...this.state,
      sortSelected: selectedValue
    }, () => {
    })
  }

  searchGame = () => {
    this.props.handleSearch(
      this.state.categorySelected,
      this.state.platformSelected,
      this.state.sortSelected
    );
  }

  render() {
    return (
      <div className="search-table grid wide">
          <Select
            nameId="category"
            nameLabel="Category"
            listOptions={this.state.categoryList}
            handleSelected={this.handleSelectCategory}
          />
          <Select
            nameId="platform"
            nameLabel="Platform"
            listOptions={this.state.platformList}
            handleSelected={this.handleSelectPlatform}
          />
          <Select
            nameId="sort"
            nameLabel="Sort By"
            listOptions={this.state.sortList}
            handleSelected={this.handleSelectSort}
          />
          <button
            className="search-button"
            onClick={this.searchGame}
          >
            <BsSearch />
          </button>
      </div>
    );

  }

}