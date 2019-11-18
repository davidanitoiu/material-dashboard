import React, { Component } from 'react';
import TopBar from '@components/TopBar/TopBar';
import Settings from '@components/Settings/Settings';
import { connect } from 'react-redux';

class SiteContent extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar title={this.props.title} />
                <Settings />
                {this.props.children}
            </React.Fragment >
        );
    }
}

export default connect()(SiteContent);