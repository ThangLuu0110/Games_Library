import React, { Component } from 'react';
import { HeaderTemplate } from './header.template';

interface HeaderState {

}

export default class Header extends Component {
    pageTitle = 'Games Market';

    tabMenuList: { index: number; tabName: string; tabPath: string }[] = [
        { index: 0, tabName: 'Home', tabPath: 'home' },
        { index: 1, tabName: 'About', tabPath: 'about' },
        { index: 2, tabName: 'Products', tabPath: 'product'},
        { index: 3, tabName: 'Contact', tabPath: 'contact'},
    ]

    state = {

    } as HeaderState;

    render() {
        return <HeaderTemplate self={this} />
    }
}