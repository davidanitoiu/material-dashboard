import { shallow } from 'enzyme';
import Notifications from '@pages/Notifications';
import React from 'react';

it('performs a shallow render without crashing', () => {
    shallow(<Notifications />)
});
