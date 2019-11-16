import { shallow } from 'enzyme';
import Icons from '@pages/Icons';
import React from 'react';
import SiteContent from '@components/SiteContent/SiteContent';

it('performs a shallow render without crashing', () => {
    shallow(<Icons />)
});

it('renders Icons correctly', () => {
    const wrapper = shallow(<Icons />);
    const siteContent = <SiteContent title="Icons">
    </SiteContent>;

    expect(wrapper).toContainReact(siteContent);
});


