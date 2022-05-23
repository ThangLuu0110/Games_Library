import React, { Component } from "react";
import { categoryList } from "../../Block/const/const";

export default class HomePage extends Component {
  categoryListName: Array<any> = categoryList;

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
