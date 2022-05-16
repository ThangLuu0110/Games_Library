import clsx from 'clsx';
import { log } from 'console';
import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import Header from './header.component';

interface HeaderTemplate {
    self: Header;
}

enum ActiveTab {
    Home,
    About,
    Product,
    Contact,
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
                            <li className={clsx('header__navbar-item')}
                                key={tab.index}
                                onClick={(e) => {
                                    switch (tab.tabPath) {
                                        case 'home':
                                            handleActiveTab('Home')
                                            break;
                                        case 'about':
                                            handleActiveTab('About')
                                            break;
                                        case 'product':
                                            handleActiveTab('Product')
                                            break;
                                        case 'contact':
                                            handleActiveTab('Contact')
                                            break;
                                        default:
                                            break;
                                    }
                                }}
                            >
                                {tab.tabName}
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </header>
    )
}