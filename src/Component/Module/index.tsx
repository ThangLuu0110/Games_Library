import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './Body/aboutPage.component';
import GamesPage from './Body/gamesPage.component';
import HomePage from './Body/homePage.component';
import Header from './Header/header.component';

export default class WebContent extends Component {
    render() {
        return (
            <div className="grid">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/game" element={<GamesPage />} />
                </Routes>
            </div>
        )
    }
}