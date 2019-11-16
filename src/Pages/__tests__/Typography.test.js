import { shallow } from 'enzyme';
import Typography from '@pages/Typography';
import React from 'react';
import SiteContent from '@components/SiteContent/SiteContent';

it('performs a shallow render without crashing', () => {
    shallow(<Typography />)
});

it('renders Typography correctly', () => {
    const wrapper = shallow(<Typography />);
    const siteContent = <SiteContent title="Typography">
    </SiteContent>;

    expect(wrapper).toContainReact(siteContent);
});


