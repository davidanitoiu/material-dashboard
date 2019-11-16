import { shallow } from 'enzyme';
import Profile from '@pages/Profile';
import React from 'react';

it('performs a shallow render without crashing', () => {
    shallow(<Profile />)
});
