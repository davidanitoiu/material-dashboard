import { shallow } from 'enzyme';
import Icons from '@pages/Icons';
import React from 'react';

it('performs a shallow render without crashing', () => {
    shallow(<Icons />)
});
