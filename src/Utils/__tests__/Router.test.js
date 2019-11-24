import React from 'react';
import AppRouter from '@utils/Router';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('React Router ->', () => {
    it('When initializing the Router, Sidebar component is shown #reactRouter', () => {
        const wrapper = shallow(
            <AppRouter />
        );
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
})
