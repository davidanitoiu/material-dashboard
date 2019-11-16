import { shallow } from 'enzyme';
import Maps from '@pages/Maps';
import React from 'react';

it('performs a shallow render without crashing', () => {
    shallow(<Maps />)
});
