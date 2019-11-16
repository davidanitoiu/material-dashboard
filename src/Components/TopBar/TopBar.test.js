import { shallow } from 'enzyme';
import TopBar from './TopBar';
import React from 'react';

it('performs a shallow render without crashing', () => {
    shallow(<TopBar />)
});
