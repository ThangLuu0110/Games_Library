import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';


interface HeaderProps {
    activeTab: string;
    handleActiveTab: (e: any) => void;
}

export default function Header({ activeTab, handleActiveTab }: HeaderProps) {

    const pageTitle: string = 'Games List';

    const tabMenuList: { index: number; tabName: string; tabPath: string }[] = [
        { index: 0, tabName: 'Home', tabPath: '' },
        { index: 1, tabName: 'About', tabPath: 'about' },
        { index: 2, tabName: 'Games', tabPath: 'game' },
    ]

    return (
        <header className="wrapper-header grid">
            <div className="header grid wide">
                <div
                    className="header__logo"
                    onClick={(e) => {
                        handleActiveTab('Home')
                    }}>
                    <Link
                        to="/"
                        className="header__logo-link"
                    >
                        <img src={logo} alt="" />
                        <span>
                            {pageTitle}
                        </span>
                    </Link>
                </div>
                <nav className="header__navbar">
                    <ul className="header__navbar-list">
                        {
                            tabMenuList.map((tab) => (
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