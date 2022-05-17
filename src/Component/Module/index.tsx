import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './Body/aboutPage.component';
import GamesPage from './Body/gamesPage.component';
import HomePage from './Body/homePage.component';
import Header from './Header/header.component';

enum ActiveTab {
    Home,
    About,
    Games,
}

type ActiveTabKey = keyof typeof ActiveTab;

export default function WebContent() {
    const [activeTab, setActiveTab] = useState<ActiveTabKey>('Home');

    const handleActiveTab = (tabname: ActiveTabKey) => {
        setActiveTab(tabname);
    }

    return (
        <div className="grid">
            <Header 
                activeTab={activeTab}
                handleActiveTab={handleActiveTab}
            />
            <Routes>
                <Route path="/" element={<HomePage handleActiveTab={handleActiveTab}/>} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/game" element={<GamesPage />} />
            </Routes>
        </div>
    )

}