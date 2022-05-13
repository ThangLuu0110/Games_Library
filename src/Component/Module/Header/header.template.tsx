import React from 'react';
import Header from './header.component';
import logo from '../../../assets/images/logo.png';

interface HeaderTemplate {
    self: Header;
}

export const HeaderTemplate = ({ self }: HeaderTemplate) => {
    const { state } = self;

    return (
        <header className="header grid wide">
            <div className="header__logo">
                <a href="/" className="header__logo-link">
                    <img src={logo} alt="" />
                </a>
            </div>
            <nav className="header__navbar">
                <ul className="header__navbar-list">
                    {
                        self.tabMenuList.map((tab) => (
                            <li className="header__navbar-item" key={tab.index}>
                                <a href="/" className="header__navbar-item__link">
                                    {tab.tabName}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </header>
    )
}