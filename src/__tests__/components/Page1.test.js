import React from 'react';
import Page1 from '../../components/Page1';

let wrapper;
const goToSecondPage = jest.fn();

describe('Page1', () => {

    beforeEach(() => {
        wrapper = shallow(<Page1 goToSecondPage={goToSecondPage}/>);
    });

    it('renders the Wrapper component', () => {
        expect(wrapper.find('Wrapper').length).toEqual(1)
    });

    it('renders proper h1', () => {
        expect(wrapper.find('Wrapper').at(0).props().children[0]).toMatchSnapshot()
    });

    it('renders the first paragraph with proper content', () => {
        expect(wrapper.find('Wrapper').at(0).props().children[1]).toMatchSnapshot()
    });

    it('renders the second paragraph with proper content', () => {
        expect(wrapper.find('Wrapper').at(0).props().children[2]).toMatchSnapshot()
    });

    it('renders the Button component and passes props to it', () => {
        expect(wrapper.find('Wrapper').at(0).props().children[3]).toMatchSnapshot()
    });

    it('button click calls setPageNumber', () => {
        wrapper.find('Wrapper').at(0).dive().find('Button').dive().find('button').simulate('click');
        expect(goToSecondPage).toHaveBeenCalled()
    });
});
