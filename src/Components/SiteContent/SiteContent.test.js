import { shallow, mount } from 'enzyme';
import React from 'react';
import SiteContent from './SiteContent';

it('performs a shallow render without crashing', () => {
    shallow(<SiteContent />)
});

it('allows the title prop to be set ', () => {
    const wrapper = mount(<SiteContent title="Dashboard" />);
    expect(wrapper.props().title).toEqual('Dashboard');
});

it('allows the title prop to be set and changed', () => {
    const wrapper = mount(<SiteContent title="Dashboard" />);
    expect(wrapper.props().title).toEqual('Dashboard');
    
    wrapper.setProps({ title: 'Ocean' });
    expect(wrapper.props().title).toEqual('Ocean');
});