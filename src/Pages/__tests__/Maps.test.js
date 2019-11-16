import { shallow } from 'enzyme';
import Maps from '@pages/Maps';
import React from 'react';
import SiteContent from '@components/SiteContent/SiteContent';

it('performs a shallow render without crashing', () => {
    shallow(<Maps />)
});

it('renders Maps correctly', () => {
    const wrapper = shallow(<Maps />);
    const siteContent = <SiteContent title="Maps">
    </SiteContent>;

    expect(wrapper).toContainReact(siteContent);
});


