import React, { Component } from 'react';
import { HeaderTemplate } from './header.template';

interface HeaderState {

}

export default class Header extends Component {
    pageTitle = 'Games Market';

    tabMenuList: { index: number; tabName: string; tabPath: string }[] = [
        { index: 0, tabName: 'Home', tabPath: ''},
        { index: 1, tabName: 'About', tabPath: 'about'},
        { index: 2, tabName: 'Games', tabPath: 'game'},
    ]

    state = {

    } as HeaderState;

    render() {
        return <HeaderTemplate self={this} />
    }
}