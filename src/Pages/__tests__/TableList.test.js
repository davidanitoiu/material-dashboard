import { shallow } from 'enzyme';
import TableList from '@pages/TableList';
import React from 'react';
import SiteContent from '@components/SiteContent/SiteContent';

it('performs a shallow render without crashing', () => {
    shallow(<TableList />)
});

it('renders TableList correctly', () => {
    const wrapper = shallow(<TableList />);
    const siteContent = <SiteContent title="TableList">
    </SiteContent>;

    expect(wrapper).toContainReact(siteContent);
});


