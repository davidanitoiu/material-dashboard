import { shallow } from 'enzyme';
import Dashboard from '@pages/Dashboard';
import React from 'react';

it('performs a shallow render without crashing', () => {
    shallow(<Dashboard />)
});
