import React, { Component } from "react";
import { categoryList } from "../../Block/const/const";

interface HomePageProps{
  handleActiveTab: (e: any) => void;
}
export default class HomePage extends Component<HomePageProps> {
  categoryListName: Array<any> = categoryList;

  componentDidMount() {
    this.props.handleActiveTab('Home')
}

  render() {
    return (
      <div className="content grid">
        <div className="homepage grid wide">
          <div className="homepage-title">
            <h1> CATEGORY </h1>
          </div>
          <ul className="homepage-category-list">
            {this.categoryListName.map((category) => (
              <li key={category.index} className="category-item">
                <img src={category.image} alt="" />
                <div className="category-item__info">
                  <h1>{`${category.categoryName} Game`}</h1>
                  <p>
                    <b>Defination:</b> {category.defination}
                    <br />
                    <br />
                    <b>Games: </b> {category.games}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
