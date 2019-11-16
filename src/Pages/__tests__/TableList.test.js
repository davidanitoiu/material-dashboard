import { shallow } from 'enzyme';
import TableList from '@pages/TableList';
import React from 'react';

it('performs a shallow render without crashing', () => {
    shallow(<TableList />)
});
