import clsx from "clsx";
import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

interface HeaderProps {
  activeTab: string;
  handleActiveTab: (e: any) => void;
  pathname: string;
}

export default class Header extends Component<HeaderProps> {
  pageTitle: string = "Games List";

  tabMenuList: { index: number; tabName: string; tabPath: string }[] = [
    { index: 0, tabName: "Home", tabPath: "" },
    { index: 1, tabName: "About", tabPath: "about" },
    { index: 2, tabName: "Games", tabPath: "game" },
  ];

  render() {
    const { activeTab, handleActiveTab } = this.props;

    return (
      <header className="wrapper-header grid">
        <div className="header grid wide">
          <div
            className="header__logo"
            onClick={(e) => {
              handleActiveTab("Home");
            }}
          >
            <Link to="/" className="header__logo-link">
              <img src={logo} alt="" />
              <span>{this.pageTitle}</span>
            </Link>
          </div>
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              {this.tabMenuList.map((tab) => (
                <li
                  className={clsx(
                    "header__navbar-item",
                    activeTab === tab.tabName && "active"
                  )}
                  key={tab.index}
                  onClick={(e) => {
                    switch (tab.tabPath) {
                      case "":
                        handleActiveTab("Home");
                        break;
                      case "about":
                        handleActiveTab("About");
                        break;
                      case "game":
                        handleActiveTab("Games");
                        break;
                      default:
                        break;
                    }
                  }}
                >
                  <Link to={`/${tab.tabPath}`} className="item-text">
                    {tab.tabName}
                  </Link>
                  <span className="dot"></span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
