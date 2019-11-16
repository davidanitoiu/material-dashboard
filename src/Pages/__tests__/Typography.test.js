import { shallow } from 'enzyme';
import Typography from '@pages/Typography';
import React from 'react';

it('performs a shallow render without crashing', () => {
    shallow(<Typography />)
});

