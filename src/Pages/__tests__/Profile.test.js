import { shallow } from 'enzyme';
import Profile from '@pages/Profile';
import React from 'react';
import SiteContent from '@components/SiteContent/SiteContent';

it('performs a shallow render without crashing', () => {
    shallow(<Profile />)
});

it('renders Profile correctly', () => {
    const wrapper = shallow(<Profile />);
    const siteContent = <SiteContent title="Profile">
    </SiteContent>;

    expect(wrapper).toContainReact(siteContent);
});


