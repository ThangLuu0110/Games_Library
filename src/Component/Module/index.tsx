import React, { Component } from 'react';
import Header from './Header/header.component';

export default class WebContent extends Component {
    render() {
        return (
            <div className="grid">
                <Header/>
            </div>
        )
    }
}