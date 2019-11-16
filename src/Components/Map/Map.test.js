import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Map from './Map';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Map />, div);
});

it('performs a shallow render without crashing', () => {
    shallow(<Map />)
});