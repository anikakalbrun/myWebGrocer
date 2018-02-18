import React from 'react';

import Root from '../../components/Root';

let wrapper;

describe('Root', () => {

    beforeEach(() => {
        wrapper = shallow(<Root/>);
    });

    it('renders the Header component', () => {
        expect(wrapper.find('Header').length).toEqual(1)
    });

    it('renders the Main component', () => {
        expect(wrapper.props().children[1]).toMatchSnapshot()
    });
});
