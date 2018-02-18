import React from 'react';

import Page3 from '../../components/Page3';

let wrapper;

describe('Page3', () => {

    beforeEach(() => {
        wrapper = shallow(<Page3/>);
    });

    it('renders the Wrapper component', () => {
        expect(wrapper.find('Wrapper').length).toEqual(1)
    });

    it('passes the innerContainerClass to the Wrapper component', () => {
        expect(wrapper.find('Wrapper').at(0).props().innerContainerClass).toEqual('inverse')
    });

    it('renders proper h1', () => {
        expect(wrapper.find('Wrapper').at(0).props().children).toMatchSnapshot()
    });
});
