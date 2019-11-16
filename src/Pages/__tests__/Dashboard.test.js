import { shallow, mount } from 'enzyme';
import Dashboard from '@pages/Dashboard';
import React from 'react';
import SiteContent from '@components/SiteContent/SiteContent';
import CardGrid from '@components/CardGrid/CardGrid';

it('performs a shallow render without crashing', () => {
    shallow(<Dashboard />)
});

it('renders Dashboard correctly', () => {
    const wrapper = shallow(<Dashboard />);
    const siteContent = <SiteContent title="Dashboard">
        <CardGrid />
    </SiteContent>;

    expect(wrapper).toContainReact(siteContent);
});


