import React from 'react';
import Wrapper from '../../components/Wrapper';

let wrapper;
const props = {
    children: <p/>,
    innerContainerClass: 'green'
};

describe('Wrapper', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<Wrapper {...props}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('defaultProps includes innerContainerClass that is equal to ""', () => {
        wrapper = renderer.create(<Wrapper/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
