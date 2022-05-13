import React, { Component } from 'react';
import { HeaderTemplate } from './header.template';

interface HeaderState {

}

export default class Header extends Component {
    pageTitle = 'Games Market';

    tabMenuList: { index: number; tabName: string; }[] = [
        { index: 0, tabName: 'Home' },
        { index: 1, tabName: 'About' },
        { index: 2, tabName: 'Products' },
        { index: 3, tabName: 'Contact' },
    ]

    state = {

    } as HeaderState;

    render() {
        return <HeaderTemplate self={this} />
    }
}