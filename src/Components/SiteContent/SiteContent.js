import React, { Component } from 'react';
import TopBar from '@components/TopBar/TopBar';

export default class SiteContent extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar title={this.props.title} />
                {this.props.children}
            </React.Fragment >
        );
    }
}