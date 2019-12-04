import React, { Component } from 'react';
import TopBar from '@components/Layout/TopBar';
import Settings from '@components/Layout/Settings';
import { connect } from 'react-redux';

class SiteContent extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar title={this.props.title} />
                <Settings />
                <div style={{ paddingLeft: 240 }}>
                    {this.props.children}
                </div>
            </React.Fragment >
        );
    }
}

export default connect()(SiteContent);