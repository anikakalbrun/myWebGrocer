import React from 'react';

import {Main} from '../../containers/Main';

let wrapper;
const setPageNumber = jest.fn();
const props = {
    setPageNumber: setPageNumber,
};

describe('Main', () => {

    it('setComponentHeight works fine and is being called by windows resize', () => {
        window.innerHeight = 800;
        wrapper = shallow(<Main pageNumber={1} {...props}/>);
        window.innerHeight = 1200;
        window.dispatchEvent(new Event('resize'));
        wrapper.update();
        expect(wrapper.find('.main > div').props().style).toMatchSnapshot();
    });

    it('goToSecondPage calls the action creator setPageNumber', () => {
        wrapper = shallow(<Main pageNumber={1} {...props}/>);
        wrapper.instance().goToSecondPage();
        expect(setPageNumber).toHaveBeenCalledWith(2);
    });

    it('renders the Page1 component when pageNumber=1', () => {
        wrapper = shallow(<Main pageNumber={1} {...props}/>);
        expect(wrapper.find('Page1').length).toEqual(1);
    });

    it('renders the Page2 component when pageNumber=2', () => {
        wrapper = shallow(<Main pageNumber={2} {...props}/>);
        expect(wrapper.props().children).toMatchSnapshot();
    });

    beforeEach(() => {
        wrapper = shallow(<Main pageNumber={3} {...props}/>);
    });

    it('renders the Page3 component when pageNumber=3', () => {
        expect(wrapper.find('Page3').length).toEqual(1);
    });

    it('renders main', () => {
        expect(wrapper.find('main.main').length).toEqual(1);
    });
});
