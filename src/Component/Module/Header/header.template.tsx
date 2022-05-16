import clsx from 'clsx';
import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import Header from './header.component';
import { Link } from 'react-router-dom';
interface HeaderTemplate {
    self: Header;
}

enum ActiveTab {
    Home,
    About,
    Games,
}

type ActiveTabKey = keyof typeof ActiveTab;

export const HeaderTemplate = ({ self }: HeaderTemplate) => {
    const [activeTab, setActiveTab] = useState<ActiveTabKey>('Home');

    const { state } = self;

    const handleActiveTab = (tabname: ActiveTabKey) => {
        setActiveTab(tabname);
    }

    console.log(activeTab);

    return (
        <header className="wrapper-header grid">
            <div className="header grid wide">
                <div className="header__logo">
                    <Link to="/" className="header__logo-link">
                        <img src={logo} alt="" />
                        <span>
                            Game List
                        </span>
                    </Link>
                </div>
                <nav className="header__navbar">
                    <ul className="header__navbar-list">
                        {
                            self.tabMenuList.map((tab) => (
                                <li className={clsx('header__navbar-item',
                                    activeTab === tab.tabName && 'active'
                                )}
                                    key={tab.index}
                                    onClick={(e) => {
                                        switch (tab.tabPath) {
                                            case '':
                                                handleActiveTab('Home')
                                                break;
                                            case 'about':
                                                handleActiveTab('About')
                                                break;
                                            case 'game':
                                                handleActiveTab('Games')
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
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}