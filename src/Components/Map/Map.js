import React, { Component } from 'react';
import MapChart from 'react-simple-maps';

export default class Map extends Component {
    render() {
        return (
            <div style={{ width: 500, height: 500 }}>
                <MapChart />
            </div>
        )
    }
};
