import { shallow } from 'enzyme';
import Notifications from '@pages/Notifications';
import React from 'react';
import SiteContent from '@components/SiteContent/SiteContent';

it('performs a shallow render without crashing', () => {
    shallow(<Notifications />)
});

it('renders Notifications correctly', () => {
    const wrapper = shallow(<Notifications />);
    const siteContent = <SiteContent title="Notifications">
    </SiteContent>;

    expect(wrapper).toContainReact(siteContent);
});


